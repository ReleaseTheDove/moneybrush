import os


# http://flask.pocoo.org/docs/1.0/config/
DEBUG = True
JSON_AS_ASCII = False
HOST = '0.0.0.0'
PORT = 5000
SECRET_KEY = 'Funk Peppa Pig'

mysql_user = os.getenv('mysql_user')
mysql_password = os.getenv('mysql_password')
mysql_host = os.getenv('mysql_host')