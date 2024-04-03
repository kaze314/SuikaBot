import threading
import time
import matplotlib.pyplot as plt
import os
from IPython import display
from suikaBot import SuikaBot


SLEEP_SECONDS = 0.2
MAX_SCORE_TO_SAVE = 1000

MAX_X_VALUE = 0.26
MIN_X_VALUE = 0.04
ACTIONS_AMOUNT = 25
X_VALUE_MULTIPLIER = (MAX_X_VALUE - MIN_X_VALUE) / ACTIONS_AMOUNT

NUMBER_OF_INSTANCES = 2

plt.ion()

def plot(bot):
    display.clear_output(wait=True)
    display.display(plt.gcf())
    plt.clf()
    plt.title('Training...')
    plt.xlabel('Number of Games')

    # Get the maximum length among all lists
    max_length = max(len(bot.scores), len(bot.mean_scores), len(bot.losses), len(bot.rates), len(bot.delta_times))

    # Pad shorter lists with the last value to match the length of the longest list
    bot.scores += [bot.scores[-1]] * (max_length - len(bot.scores))
    bot.mean_scores += [bot.mean_scores[-1]] * (max_length - len(bot.mean_scores))
    bot.losses += [bot.losses[-1]] * (max_length - len(bot.losses))
    bot.rates += [bot.rates[-1]] * (max_length - len(bot.rates))
    bot.delta_times += [bot.delta_times[-1]] * (max_length - len(bot.delta_times))
    
    # Plot scores and mean scores
    plt.plot(bot.scores, label='Score')
    plt.plot(bot.mean_scores, label='Avg Score')
    plt.plot(bot.losses, label='Loss')
    plt.plot(bot.rates, label='Exploration Rate')
    plt.plot(bot.delta_times, label='Delta Time In Seconds')

    plt.ylim(ymin=0)
    plt.legend()
    plt.text(len(bot.scores)-1, bot.scores[-1], str(bot.scores[-1]))
    plt.text(len(bot.mean_scores)-1, bot.mean_scores[-1], str(bot.mean_scores[-1]))
    plt.text(len(bot.losses)-1, bot.losses[-1], str(bot.losses[-1]))
    plt.text(len(bot.rates)-1, bot.rates[-1], str(bot.rates[-1]))
    plt.text(len(bot.delta_times)-1, bot.delta_times[-1], str(bot.delta_times[-1]))

    plt.show(block=False)
    plt.pause(.1)

def process_instance(bot, game, index):
    states = []
    new_states = []
    actions = []
    rewards = []
    is_dones = []

    if len(bot.games) - 1 == index:
        print("Printing data for instance ", index + 1)

    before_time = time.time()
    while True:
        
        if (game.can_drop_fruit() is False):
            continue

        # Get prediciton
        score = game.get_score()
        state = bot.get_state(index)
        action = bot.get_action(state, index)

        if state is None:
            continue

        # Calculate X value and drop
        x_value = action * X_VALUE_MULTIPLIER + MIN_X_VALUE
        current_fruit_index = state[0]
        game.drop_fruit(x_value)

        # Wait before continuing
        time.sleep(SLEEP_SECONDS)

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

        print('Game', bot.games_number, 'Score', score)

        states.append(state)
        new_states.append(state)
        actions.append(action)
        rewards.append(0)
        is_dones.append(is_done)

        after_time = time.time()
        time_elapsed = after_time - before_time
        bot.delta_times.append(time_elapsed)
        break


    for i in range(len(states)):
        bot.cache(states[i], new_states[i], actions[i], rewards[i], is_dones[i])

    
    loss = bot.learn()
    bot.losses.append(loss)

    if (score > MAX_SCORE_TO_SAVE):
            json_data = {
                'scores': bot.scores,
                'avg scores': bot.mean_scores,
                'game number': bot.games_number,
                'loss': bot.losses,
                'exploration rates': bot.rates,
                'total score': bot.total_score,
                'delta times': bot.delta_times,
            }
            bot.model.save(json_data)
        


def train():
    print('-->Creating ', NUMBER_OF_INSTANCES, ' instances')
    bot = SuikaBot(NUMBER_OF_INSTANCES)

    while True:
        threads = []
        for index, game in enumerate(bot.games):
            t = threading.Thread(target=process_instance, args=(bot, game, index))
            threads.append(t)
            t.start()
            

        for thread in threads:
            thread.join()

        bot.learn()
        plot(bot) 

		

if __name__ == '__main__':
    train()