from flask import Flask, request, jsonify
from models import Article
import hashlib
import time

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

    