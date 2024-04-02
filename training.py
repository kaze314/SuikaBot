import asyncio
import time
import matplotlib.pyplot as plt
import os
from IPython import display
from suikaBot import SuikaBot


SLEEP_SECONDS = 0.1
MAX_SCORE_TO_SAVE = 1000

MAX_X_VALUE = 0.26
MIN_X_VALUE = 0.04
ACTIONS_AMOUNT = 25
X_VALUE_MULTIPLIER = (MAX_X_VALUE - MIN_X_VALUE) / ACTIONS_AMOUNT

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
    plt.plot(loss, label='Loss x 10')
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
        action = bot.get_action(state, index)

        # Calculate X value and drop
        x_value = action * X_VALUE_MULTIPLIER + MIN_X_VALUE
        current_fruit_index = state[0]
        game.drop_fruit(x_value)

        # Wait before continuing
        await asyncio.sleep(SLEEP_SECONDS)

        is_done = game.is_over()
        if is_done is False:
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
            continue

        # If game is over, refresh and save.
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


    for i in range(len(states)):
        bot.cache(states[i], new_states[i], actions[i], rewards[i], is_dones[i])
    
    bot.learn()


async def train():
    bot = SuikaBot(instances=3)

    while True:
        tasks = []
        for index, game in enumerate(bot.games):
            task = asyncio.create_task(process_instance(bot, game, index))
            tasks.append(task)

        await asyncio.gather(*tasks)
        loss = bot.learn()

        for index, game in enumerate(bot.games):
            bot.losses.append(loss)
            plot(bot.scores, bot.mean_scores, bot.losses, bot.rates)     
		

if __name__ == '__main__':
    asyncio.run(train())