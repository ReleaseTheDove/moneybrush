import requests

s = requests.Session()
s.auth = ('simon', '123')

s.headers.update({'Content-Type': 'application/json;charset=UTF-8'})
r = s.get('http://localhost:5000/api/users/token')
print(r.text)
r = s.get('http://localhost:5000/api/users/token')
print(r.text)