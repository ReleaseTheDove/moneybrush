from flask import request, jsonify, make_response, Blueprint

from absgamer.decorator import error_handle
from absgamer.models import Game
from absgamer.utils import pack_resp


game = Blueprint('game', __name__)


@game.route('/<id>', methods=['GET'])
@game.route('/', methods=['GET'])
@error_handle
def get_games(id=None):
    if not id:
        games = Game.get_all()
        return pack_resp(games)

    game = Game.get_first(id=id)
    if not game:
        return pack_resp('No this item.')
    return pack_resp(game)