from flask import request, jsonify, make_response, Blueprint

from absgamer.decorator import error_handler
from absgamer.models import Article
from absgamer.utils import pack_resp


article = Blueprint('article', __name__)


@article.route('/<id>', methods=['GET'])
@article.route('/', methods=['GET'])
@error_handler
def get_articles(id=None):
    if not id:
        articles = Article.get_all(status=0)
        return pack_resp(articles)

    article = Article.get_first(id=id, status=0)
    if not article:
        return pack_resp('No this item.')
    return pack_resp(article)

# TODO: add put / update uri
# TODO: ip record.