import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import threading
import numpy as np
import json
import os


lock = threading.Lock()

class Linear_QNet(nn.Module):
	def __init__(self, input_size, hidden_size, second_hidden_size, output_size):
		super().__init__()
		self.linear1 = nn.Linear(input_size, hidden_size)
		self.linear2 = nn.Linear(hidden_size, second_hidden_size)
		self.linear3 = nn.Linear(second_hidden_size, output_size)

	def forward(self, x):
		x = F.relu(self.linear1(x))
		x = F.relu(self.linear2(x))
		x = self.linear3(x)
		return x

	def save(self, json_data, file_name='SuikaBot.model'):
		# Save the model
		folder = './model'
		if not os.path.exists(folder):
			os.makedirs(folder)

		model_filename = os.path.join(folder, file_name)
		torch.save(self.state_dict(), model_filename)

		# Save data related to the model in json.
		json_filename = os.path.join(folder, 'SuikaData.json')
		with open(json_filename, 'w') as file:
			json.dump(json_data, file)


class SuikaTrainer:
	def __init__(self, model, learning_rate, gamma):
		self.learning_rate = learning_rate
		self.gamma = gamma
		self.model = model
		self.optimizer = optim.Adam(model.parameters(), lr=self.learning_rate)
		self.criterion = nn.MSELoss()

	def train(self, new_state, state, action, reward, is_done):
		with lock:
			state = torch.tensor(np.array(state), dtype=torch.float)
			new_state = torch.tensor(np.array(new_state), dtype=torch.float)
			action = torch.tensor(np.array(action), dtype=torch.float)
			reward = torch.tensor(np.array(reward), dtype=torch.float)

			# 1: predicted Q values with current state
			pred = self.model(state)

			target = pred.clone()
			for idx in range(len(is_done)):
				Q_new = reward[idx]
				if not is_done[idx]:
					Q_new = reward[idx] + self.gamma * torch.max(self.model(new_state[idx]))

				target[idx][torch.argmax(action[idx]).item()] = Q_new


			self.optimizer.zero_grad()
			loss = self.criterion(target, pred)
			loss.backward()

			self.optimizer.step()
			return loss.item()

