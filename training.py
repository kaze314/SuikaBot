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
import signal
import numpy as np
import random
import asyncio
import time


MAX_X_VALUE = 0.26
MIN_X_VALUE = 0.04
X_VALUE_MULTIPLIER = (MAX_X_VALUE - MIN_X_VALUE) / 25

URL = "http://localhost:8000/play/offline.html"

# NN constants
EXPLORATION_RATE_DECAY = 0.9999975
EXPLORATION_RATE_MIN = 0.1
LEARNING_RATE = 0.000001
GAMMA = 0.9
BATCH_SIZE = 32

MAX_MEMORY = 100_000

plt.ion()

class SuikaBot:
    def __init__(self, instances = 1):

        self.games_number = 0
        self.total_score = 0
        self.scores = []
        self.mean_scores = []
        self.losses = []
        self.rates = []

        self.memory = deque(maxlen=MAX_MEMORY)
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        print("-->Device: ", self.device)
        
        self.model = Linear_QNet(452, 800, 225, 25)

        model_path = './model/SuikaBot.model'
        if os.path.exists(model_path):
            self.model.load_state_dict(torch.load(model_path)) 
            print('-->Loaded model')
        else:
            print('-->Creating model')

        self.trainer = SuikaTrainer(self.model, LEARNING_RATE, GAMMA)
        self.exploration_rate = 1
        

        self.games = []
        for i in range(instances):
            game = SuikaGame(URL)
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
                print("-->Random Action")
            action = random.randint(0, 24)

        # Exploit -> Most optimal action.
        else:
            tensor_state = torch.tensor(state, dtype=torch.float)
            prediction = self.model(tensor_state)

            if len(self.games) - 1 == instance_index:
                print("-->Predicted Action")
                print("Output: ", prediction)

            action = torch.argmax(prediction).item()

        # decrease exploration_rate
        self.exploration_rate *= EXPLORATION_RATE_DECAY
        self.exploration_rate = max(EXPLORATION_RATE_MIN, self.exploration_rate)

        return action
        

    #Add the experience to memory. 
    def cache(self, state, new_state, action, reward, is_done):
        self.memory.append((state, new_state, action, reward, is_done))

    # Update online action value (Q) function with a batch of experiences.
    def learn(self):
        # Sample experiences from memory
        sample = random.sample(self.memory, BATCH_SIZE)
        state, new_state, action, reward, is_done = zip(*sample)

        return self.trainer.train(state, new_state, action, reward, is_done)

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

async def process_instance(bot, game, index):
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

        # Wait before continuing
        await asyncio.sleep(0.2)

        is_done = game.is_over()
        if is_done:
            game.refresh()

            bot.games_number += 1
            bot.total_score += score
            mean_score = bot.total_score / bot.games_number 

            bot.rates.append(bot.exploration_rate*100)
            bot.scores.append(score) 
            bot.mean_scores.append(mean_score)

            if (score > 1000):
                json_data = {
                    'scores': bot.scores,
                    'avg scores': bot.mean_scores,
                    'game number': bot.games_number,
                    'loss': bot.losses,
                    'exploration rates': bot.rates,
                    'total score': bot.total_score,
                }
                bot.model.save(json_data)

            print('Game', bot.games_number, 'Score', score)

            states.append(state)
            new_states.append(state)
            actions.append(action)
            rewards.append(0)
            is_dones.append(is_done)
            break
	   

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



    for i in range(len(states)):
        bot.cache(states[i], new_states[i], actions[i], rewards[i], is_dones[i])


async def train():
    bot = SuikaBot(instances=3)

    while True:
        tasks = []
        for index, game in enumerate(bot.games):
            task = asyncio.create_task(process_instance(bot, game, index))
            tasks.append(task)

        await asyncio.gather(*tasks)
        print(len(bot.memory))
        loss = bot.learn()

        for index, game in enumerate(bot.games):
            bot.losses.append(loss)
            plot(bot.scores, bot.mean_scores, bot.losses, bot.rates)     
		

if __name__ == '__main__':
    asyncio.run(train())