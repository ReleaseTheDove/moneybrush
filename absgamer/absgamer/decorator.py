from functools import wraps
from flask import request, g
from werkzeug.datastructures import Authorization

from absgamer.clog import logger
from absgamer.utils import pack_resp
from absgamer.models import User


def error_handler(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except AttributeError:
            return pack_resp('Type error.', 400)
        except Exception as e:
            logger.error(e)
            return pack_resp('Server error.', 500)
    return decorator


def login_required(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        auth = request.authorization
        if auth is None and 'Authorization' in request.headers:
            try:
                auth_type, token = request.headers['Authorization'].split(None, 1)
                auth = Authorization(auth_type, {'token': token})
            except ValueError:
                pass
        if auth is None or auth.type.lower() != 'basic':
            return pack_resp('Unauthorized.', 401)
        user = User.isExist(auth.username)
        if user and user.verify_password(auth.password):
            pass
        else:
            print(auth.username)
            user = User.verify_auth_token(auth.username)
            if not user:
                return pack_resp('Unauthorized.', 401)
        g.user = user
        return func(*args, **kwargs)
    return decorator


def admin_privilege(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        if not hasattr(g, 'user') or g.user.role != -1:
            return pack_resp('Forbidden.', 403)
        return func(*args, **kwargs)
    return decorator