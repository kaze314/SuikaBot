import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import os

class Linear_QNet(nn.Module):
	def __init__(self, input_size, hidden_size, output_size):
		super().__init__()
		self.linear1 = nn.Linear(input_size, hidden_size)
		self.linear2 = nn.Linear(hidden_size, output_size)

	def forward(self, x):
		x = self.linear1(x)
		x = F.relu(x)
		x = self.linear2(x)
		return x

	def save(self, file_name='SuikaBot.model'):
		folder = './model'
		if not os.path.exists(folder):
			os.makedirs(folder)

		file_name = os.path.join(folder, file_name)
		torch.save(self.state_dict(), file_name)

class SuikaTrainer:
	def __init__(self, model, learning_rate, gamma):
		self.learning_rate = learning_rate
		self.gamma = gamma
		self.model = model
		self.optimizer = optim.Adam(model.parameters(), lr=self.learning_rate)
		self.criterion = nn.MSELoss()

	def train(self, new_state, state, action, reward, is_done):
		state = torch.tensor(state, dtype=torch.float)
		new_state = torch.tensor(new_state, dtype=torch.float)
		action = torch.tensor(action, dtype=torch.float)
		reward = torch.tensor(reward, dtype=torch.float)

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

