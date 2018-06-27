import requests

s = requests.Session()

data = '{"username": "simon", "password": "123"}'
headers = {'Content-Type': 'application/json;charset=UTF-8'}
r = s.post('http://localhost:5000/api/users/', data=data, headers=headers)
print(r.json())
assert r.json() == {'code': 200, 'res': {'username': 'simon'}}