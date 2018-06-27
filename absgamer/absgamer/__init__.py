from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object('config')
    app.secret_key = app.config['SECRET_KEY']
    app.debug = app.config['DEBUG']
    app.host = app.config['HOST']
    app.port = app.config['PORT']

    from absgamer.models import session
    @app.teardown_request
    def handle_teardown_request(exception):
        "Dealing at the aftermath."
        session.remove()

    from .views.article import article
    from .views.game import game
    from .views.user import user
    app.register_blueprint(article, url_prefix='/api/articles')
    app.register_blueprint(game, url_prefix='/api/games')
    app.register_blueprint(user, url_prefix='/api/users')

    return app