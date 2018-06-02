from flask import request, jsonify, make_response

from absgamer import api
from absgamer.decorator import error_handle
from absgamer.models import Article
from absgamer.utils import pack_resp


@api.route('/articles/<id>', methods=['GET'])
@api.route('/articles', methods=['GET'])
@error_handle
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