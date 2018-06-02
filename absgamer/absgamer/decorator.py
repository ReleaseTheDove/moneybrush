from flask import current_app, request, jsonify, g, make_response
from functools import wraps


def error_handle(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            return make_response(
                    jsonify({'code': 500, 'result': str(e)}), 500)
    return decorator