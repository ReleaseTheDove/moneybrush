from flask import request, jsonify, make_response, Blueprint, g
from flask_httpauth import HTTPBasicAuth

from absgamer.decorator import error_handler, login_required
from absgamer.models import User
from absgamer.utils import pack_resp


user = Blueprint('user', __name__)
auth = HTTPBasicAuth()


@user.route('/token')
@error_handler
@login_required
def get_auth_token():
    g.token = g.user.generate_auth_token()
    return pack_resp({'token': g.token.decode('ascii')})


@user.route('/', methods=['POST'])
@error_handler
def add_user():
    username = request.json.get('username')
    password = request.json.get('password')
    if not (username and password):
        return pack_resp('Not enough params.', 400)
    if User.isExist(username):
        return pack_resp('Username has been registered.')
    user = User(username=username)
    user.hash_password(password)
    user = User.add(user)
    if not user:
        return pack_resp('Create failed.', 500)
    return pack_resp({'username': user.username}, 201)