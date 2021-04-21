import requests
url = "https://icanhazdadjoke.com/search"

response = requests.get(
	url, 
	headers={"Accept": "application/json"},
	params={"term": "games", "limit": 3}
)

data = response.json()
print(data["results"])
print(data['results'][0]['joke'])
