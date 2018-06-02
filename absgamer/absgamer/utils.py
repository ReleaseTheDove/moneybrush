from flask import jsonify, make_response


def pack_resp(res, code=200):
    return make_response(jsonify({'code': code, 'res': res}))