import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
from collections import deque
from suikaGameComponent import SuikaGame
from model import Linear_QNet, SuikaTrainer

import matplotlib.pyplot as plt
from IPython import display
import os
import numpy as np
import random
import threading
import time


MAX_X_VALUE = 0.26
MIN_X_VALUE = 0.04
X_VALUE_MULTIPLIER = (MAX_X_VALUE - MIN_X_VALUE) / 10

# 2 Minute and 30 second limit on threads
THREAD_TIMEOUT_DURATION = 2.5 * 60
MAX_MEMORY = 100_000


plt.ion()

def plot(scores, mean_scores, loss, exploration_rate):
    display.clear_output(wait=True)
    display.display(plt.gcf())
    plt.clf()
    plt.title('Training...')
    plt.xlabel('Number of Games')

    # Plot scores and mean scores
    
    plt.plot(scores, label='Score')
    plt.plot(mean_scores, label='Avg Score')
    plt.plot(loss, label='Loss')
    plt.plot(exploration_rate, label='Exploration Rate')

    plt.ylim(ymin=0)
    plt.legend()
    plt.text(len(scores)-1, scores[-1], str(scores[-1]))
    plt.text(len(mean_scores)-1, mean_scores[-1], str(mean_scores[-1]))
    plt.text(len(loss)-1, loss[-1], str(loss[-1]))
    plt.text(len(exploration_rate)-1, exploration_rate[-1], str(exploration_rate[-1]))

    plt.show(block=False)
    plt.pause(.1)

class SuikaBot:
    def __init__(self, instances = 1):
        self.games_number = 3683
        self.scores = [0] * instances
        self.total_score = 0
        self.plot_scores = []
        self.plot_mean_scores = []
        self.losses = []
        self.rates = []

        self.gamma = 0.9
        self.batch_size = 32
        self.memory = deque(maxlen=MAX_MEMORY)
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        print("Device: ", self.device)
        
        self.model = Linear_QNet(452, 800, 10)
        self.model.load_state_dict(torch.load('./model/SuikaBot.model')) 
        print('Loaded model')
        self.trainer = SuikaTrainer(self.model, 0.000001, self.gamma)

        self.exploration_rate = 0.42
        self.exploration_rate_decay = 0.9999975
        self.exploration_rate_min = 0.1

        self.url = "http://localhost:8000/play/offline.html"
        self.games = []
        for i in range(instances):
            game = SuikaGame(self.url)
            self.games.append(game)
        
    def get_state(self, instance_index = 0):
        (current_fruit_index, next_fruit_index) = self.games[instance_index].get_fruit_queue()
        if (current_fruit_index is None):
            return None

        display_html = False
        (x_values, y_values, fruit_types) = self.games[instance_index].get_fruit_list(display_html)
        if (x_values is None):
            return None

        x_values_limited = np.zeros(150, dtype=np.float32)
        y_values_limited = np.zeros(150, dtype=np.float32)
        fruit_types_limited = np.zeros(150, dtype=np.float32)

        x_values_limited[:len(x_values)] = x_values
        y_values_limited[:len(y_values)] = y_values
        fruit_types_limited[:len(fruit_types)] = fruit_types

        state = [
            current_fruit_index,
            next_fruit_index,
        ]

        np_state = np.array(state, dtype=np.float32)
        np_state = np.concatenate((np_state, x_values_limited), axis=0)
        np_state = np.concatenate((np_state, y_values_limited), axis=0)
        np_state = np.concatenate((np_state, fruit_types_limited), axis=0)
        return np_state

    # Given a state, choose an epsilon-greedy action
    def get_action(self, state, instance_index = 0):

        # Explore -> A random action.
        if np.random.rand() < self.exploration_rate:
            if len(self.games) - 1 == instance_index:
                print("Random Action")
            action = random.randint(0, 9)

        # Exploit -> Most optimal action.
        else:
            
            tensor_state = torch.tensor(state, dtype=torch.float)
            prediction = self.model(tensor_state)

            if len(self.games) - 1 == instance_index:
                print("Predicted Action")
                print("Output: ", prediction)
            action = torch.argmax(prediction).item()

        # decrease exploration_rate
        self.exploration_rate *= self.exploration_rate_decay
        self.exploration_rate = max(self.exploration_rate_min, self.exploration_rate)

        return action
        

    #Add the experience to memory. 
    def cache(self, state, new_state, action, reward, is_done):
        self.memory.append((state, new_state, action, reward, is_done))

    # Update online action value (Q) function with a batch of experiences.
    def learn(self):
        # Sample experiences from memory
        sample = random.sample(self.memory, self.batch_size)
        state, new_state, action, reward, is_done = zip(*sample)

        return self.trainer.train(state, new_state, action, reward, is_done)
        
def process_instance(bot, game, index):
    states = []
    new_states = []
    actions = []
    rewards = []
    is_dones = []

    if len(bot.games) - 1 == index:
        print("Printing data for instance ", index + 1)

    while True:
        
        if (game.can_drop_fruit() is False):
            continue

        # Get prediciton
        score = game.get_score()
        state = bot.get_state(index)

        if state is None:
            continue

        action = bot.get_action(state, index)

        # Calculate X value and drop
        x_value = action * X_VALUE_MULTIPLIER + MIN_X_VALUE
        current_fruit_index = state[0]

        (x_values, y_values, fruit_types) = game.get_fruit_list(display_html = False)
        game.drop_fruit(x_value)
        time.sleep(0.16)

        # Wait before continuing
        is_done = game.is_over()
        for value in y_values:
            if value < 0.13:
                is_done = True
                bot.games[index].is_done = True
                break

        if is_done:
            game.refresh()
            bot.games_number += 1
            bot.rates.append(bot.exploration_rate*100)

            if (score > 1000):
                bot.model.save()

            print('Game', bot.games_number, 'Score', score)
            
            bot.total_score += score
            bot.scores[index] = score

            states.append(state)
            new_states.append(state)
            actions.append(action)
            rewards.append(0)
            is_dones.append(is_done)
            break
	  
        try:
            # Calculate reward
            new_score = game.get_score()
        
            reward = new_score - score
            new_state = bot.get_state(index)
            if len(bot.games) - 1 == index:
                print("X Value: ", x_value)
                print("Reward: ", reward)
                print("")

            states.append(state)
            new_states.append(new_state)
            actions.append(action)
            rewards.append(reward)
            is_dones.append(is_done)
        except:
            return;

    for i in range(len(states)):
        bot.cache(states[i], new_states[i], actions[i], rewards[i], is_dones[i])


def train():
    bot = SuikaBot(instances=15)
    
    while True:
        threads = []
        for index, game in enumerate(bot.games):
            t = threading.Thread(target=process_instance, args=(bot, game, index))
            threads.append(t)
            t.start()
    
        thread_timer = THREAD_TIMEOUT_DURATION
        for index, t in enumerate(threads):
            start = time.time()
            t.join(timeout=thread_timer)
            end = time.time()

            thread_timer -= end - start
            if t.is_alive():
                bot.games[index] = SuikaGame(bot.url)
        
        loss = bot.learn()

        for index, game in enumerate(bot.games):
            bot.losses.append(loss)
            mean_score = bot.total_score / (bot.games_number - 3683)
            bot.plot_scores.append(bot.scores[index])
            bot.plot_mean_scores.append(mean_score)
            plot(bot.plot_scores, bot.plot_mean_scores, bot.losses, bot.rates)         
		

if __name__ == '__main__':
    train()