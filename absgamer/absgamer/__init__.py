from flask import Blueprint
from models import session

api = Blueprint('api', __name__)


@api.teardown_request
def handle_teardown_request(exception):
    "Dealing at the aftermath."
    session.remove()

from absgamer.views import article, game