# Install chrome browser and charomedriver:
#   chrome version 63.0.3239.132: https://www.google.com/chrome/
#   chromedriver version 2.38: https://sites.google.com/a/chromium.org/chromedriver/home

import time
import random
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

from config import driver_path


class Browser(object):
    operations = [
        'sleep', 'refresh', 'back', 'forward', 'click', 'double_click', 'misoperation',
        'tab', 'up', 'down', 'quit', 'close']

    def __init__(self, executable_path=driver_path, chrome_options=None):
        self.driver = webdriver.Chrome(executable_path=executable_path)
        
        self.action = ActionChains(self.driver)
        # TODO: set mouse move speed when every action.

    def setup(self):
        self.driver.implicitly_wait(10)
        # TODO window size.

    def go(self, url):
        """Load the page by url."""
        self.driver.get(url)
        title = self.driver.title
        print(title)
        time.sleep(10)

    def misoperation(self):
        """Miss operation, such as offset click, error key enter, etc."""
        pass
        # TODO: any keys.

    def search(self):
        pass

    def copy(self):
        pass

    def click(self, elem=None):
        """Move to the element. Sleep a few seconds and click."""
        self.action.move_to_element(elem).perform()
        self.sleep()
        self.action.click(elem).perform()

    def double_click(self):
        """Move by random offset and double clicke."""
        random_x = 1
        random_y = 2
        self.action.move_by_offset(random_x, random_y).perform()
        self.sleep()
        self.action.double_click().perform()

    def enter_single_key(self, key):
        """Enter the key by keyboard."""        
        self.action.key_down(key).perform()
        self.action.key_up(key).perform()

    def enter_ctrl_key(self, key):
        """Enter ctrl + key by keyboard."""
        self.action.key_down(Keys.CONTROL).send_keys(key).key_up(Keys.CONTROL).perform()

    def sleep(self, second=1):
        """Sleep random."""
        time.sleep(random.random()*second)


if __name__ == '__main__':
    b = Browser()
    b.go('https://www.baidu.com')