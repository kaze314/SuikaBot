import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F

import numpy as np
import os
import json
import random
from collections import deque

from suikaGameComponent import SuikaGame
from model import Linear_QNet, SuikaTrainer

URL = "http://localhost:8000/play/offline.html"

# NN constants
EXPLORATION_RATE_DECAY = 0.99999975
EXPLORATION_RATE_MIN = 0.1
LEARNING_RATE = 1e-4
GAMMA = 0.9
BATCH_SIZE = 64

MAX_MEMORY = 100_000

class SuikaBot:
    def __init__(self, instances = 1):
        self.memory = deque(maxlen=MAX_MEMORY)
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        print("-->Device: ", self.device)
        
        self.model = Linear_QNet(452, 800, 225, 25)

        model_path = './model/SuikaBot.model'
        model_data_path = './model/SuikaData.json'

        if os.path.exists(model_path):
            self.model.load_state_dict(torch.load(model_path)) 
            print('-->Loaded model')

            with open(model_data_path, 'r') as file:
                data = json.load(file)

            self.games_number = data['game number']
            self.total_score = data['total score']
            self.scores = data['scores']
            self.mean_scores = data['avg scores']
            self.losses = data['loss']
            self.rates = data['exploration rates']
            self.exploration_rate = self.rates[-1]
            print('-->Loaded save data')

        else:
            print('-->Creating model')
            self.games_number = 0
            self.total_score = 0
            self.scores = []
            self.mean_scores = []
            self.losses = []
            self.rates = []
            self.exploration_rate = 1

        self.trainer = SuikaTrainer(self.model, LEARNING_RATE, GAMMA)
        
        self.games = []
        for i in range(instances):
            if (i == instances - 1):
                game = SuikaGame(URL, headless=False)
            else:
                game = SuikaGame(URL, headless=True)

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
        if len(self.memory) < BATCH_SIZE:
            print('Sample size is too small for learning.')
            return None

        sample = random.sample(self.memory, BATCH_SIZE)
        state, new_state, action, reward, is_done = zip(*sample)

        return self.trainer.train(state, new_state, action, reward, is_done)