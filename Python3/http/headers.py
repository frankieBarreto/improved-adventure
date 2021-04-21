import requests
url = "https://icanhazdadjoke.com/"

response = requests.get(url, headers={"Accept": "application/json"}) # "application/json"
# print(response.text) # 'text/plain' in header
data = response.json()

print(data['joke']) # object with key ,val the key 'joke' returns just the joke 
# {'id': 'h39UfibMJBd', 'joke': 'Did you hear about the cheese who saved the world? It was Legend-dairy!', 'status': 200}
print(f"status: {data['status']}")



