from absgamer import create_app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=app.debug, host=app.host, port = app.port)