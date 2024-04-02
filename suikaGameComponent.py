# The inputs and outputs work by opening the webpage via selenium webdriver and executing javascript code directly on the webpage.
# The base javascript code from the website is modified, either with a custom web extention or locally changing the files in your own implementaion,
# to store important local structures and functions in global variables so the webdriver can assess them.

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import time
import random
import os

fruits = [
	'Unknown',
	'Cherry', 
	'Strawberry', 
	'Grape', 
	'Orange', 
	'Persimmon', 
	'Apple', 
	'Yuzu', 
	'Peach', 
	'Pineapple', 
	'Honeydew', 
	'Watermelon', 
	'RottenCherry', 
	'RottenStrawberry', 
	'RottenGrape', 
	'RottenOrange', 
	'RottenPersimmon', 
	'RottenApple', 
	'RottenYuzu', 
	'RottenPeach', 
	'RottenPineapple', 
	'RottenHoneydew', 
	'RottenWatermelon', 
	'Blueberry'
]

USER_HOME = os.environ.get("HOMEDRIVE") + os.environ.get("HOMEPATH")
PATH = USER_HOME + "\\AppData\\Local\\Thorium\\Application\\thorium.exe"

class SuikaGame:
	def __init__(self, url, headless = True):
		print("Init SuikaGame...")
		self.URL = url
		
		options = webdriver.ChromeOptions()
		options.binary_location = PATH
		options.add_extension('speedPluginModded.crx')

		if headless:
			options.add_argument("--headless")

		self.driver = webdriver.Chrome(options = options)
		self.driver.set_window_size(800, 800)

		self.fruit_counter = 0
		self.refresh()

	def __del__(self):
		print("Cleaning up SuikaGame...")
		self.driver.quit()

	def refresh(self):
		self.driver.get(self.URL)
		time.sleep(3)
		
		element = self.driver.find_element(By.XPATH, "//div[@class='relative mb-2 h-fit w-fit flex-grow-0']")
		element.click()
		self.fruit_counter = 1

	def can_drop_fruit(self):
		if (self.is_data_defined() is False):
			return None;

		return self.driver.execute_script("return typeof GameData.falling_fruit == 'undefined';")

	def drop_fruit(self, x_value):
		if (self.is_over()):
			return
		# The previewHelperFunction is the function that calculates the fruit to be dropped.
		fruit_type = self.driver.execute_script("return previewHelperFunction(%s);" % (self.fruit_counter))
		nextPreview = self.driver.execute_script("return previewHelperFunction(%s + 2);" % (self.fruit_counter))

		# Call to the javascript DropFunction and input data.
		self.driver.execute_script("""
			DropFunction({
				tick: 100,
				x: %s,
				type: %s,
				playerId: 10,
				nextPreview: %s,
			});
			""" % (x_value, fruit_type, nextPreview)
		)

		self.fruit_counter += 1

	def get_score(self):
		if (self.is_data_defined() is False):
			return None;

		return self.driver.execute_script("return GameData.score;")

	def is_over(self):
		# If the webpage changes it means the game has ended.
		if self.driver.current_url != self.URL:
			return True

		# ShouldRefresh is set to 1 when the game should end.
		should_refresh = self.driver.execute_script("return ShouldRefresh;")
		if should_refresh == 1:
			return True

		return False

	def get_fruit_queue(self):
		if (self.is_data_defined() is False):
			return (None, None);

		current_fruit_index = self.driver.execute_script("return GameData.fruit_queue.current;")
		next_fruit_index = self.driver.execute_script("return GameData.fruit_queue.next_next;")

		return (current_fruit_index, next_fruit_index)

	def get_fruit_list(self, display_html):
		if (self.is_data_defined() is False):
			return (None, None, None);
		
		get_fruit_js = """
			var x_values = [];
			var y_values = [];
			var fruit_types = [];
			GameData.fruits.forEach(function(value, key) {
				x_values.push(value.sprite.x);
				y_values.push(value.sprite.y);
				fruit_types.push(value.def.type);
			});
			return [x_values, y_values, fruit_types];
		"""
		(x_values, y_values, fruit_types) = self.driver.execute_script(get_fruit_js)

		# The fruit data being displayed the the webpage.
		if (display_html):
			html_modifier = """
				var x_values = arguments[0];
				var y_values = arguments[1];
				var fruit_types = arguments[2];
				var fruits_amount = arguments[3];
				var score = arguments[4];

				// Remove any existing <h1> elements
				var existingHeaders = document.getElementsByTagName('h1');
				for (var i = existingHeaders.length - 1; i >= 0; i--) {
				    existingHeaders[i].parentNode.removeChild(existingHeaders[i]);
				}

				var newHeader = document.createElement('h1');
				newHeader.innerText = score;
				var specificDivs = document.getElementsByClassName('relative flex select-none flex-col items-center justify-center p-4');
				specificDivs[0].appendChild(newHeader);

				for (var i = 0; i < fruits_amount; i++) {
				    var newHeader = document.createElement('h1');
				    newHeader.innerText = 'X: ' + x_values[i] + ', Y: ' + y_values[i] + ', Fruit Type: ' + fruit_types[i];
				    var specificDivs = document.getElementsByClassName('relative flex select-none flex-col items-center justify-center p-4');
				    specificDivs[0].appendChild(newHeader);
				}
			"""

			# Execute the JavaScript code
			fruits_amount = self.driver.execute_script("return GameData.fruits.size;")
			self.driver.execute_script(html_modifier, x_values, y_values, fruit_types, fruits_amount, self.get_score())

		return (x_values, y_values, fruit_types)

	# In some cases, for example, when there is no fruit present, these values will be undefined.
	# Assessing these values while they are undefined will raise an exception.
	# is_data_defined must be called before every use of GameData.
	def is_data_defined(self):
		return self.driver.execute_script("return typeof GameData !== 'undefined' && typeof GameData.fruits !== 'undefined';")
		

# Testing
if __name__ == '__main__':
	url = "http://localhost:8000/play/offline.html"
	bot = SuikaGame(url)

	display_html = True
	while True:
		if (bot.is_over()):
			bot.refresh()

		bot.get_fruit_list(display_html)

		if (bot.can_drop_fruit()):

			
			(current_fruit_index, next_fruit_index) = bot.get_fruit_queue()
			if current_fruit_index is None:
				continue

			random_float = random.uniform(0.04, 0.28)
			bot.drop_fruit(random_float)

			time.sleep(2)
