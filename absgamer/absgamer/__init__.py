from flask import Blueprint


api = Blueprint('api', __name__)


from absgamer.views import article, game