import requests
from random import choice
import pyfiglet
from termcolor import colored


url = "https://icanhazdadjoke.com/search"
search_word = input("What should we search for? ")
res = requests.get(
    url, 
    headers = {"Accept": "application/json"},
    params={"term":search_word}
    ).json()

# print(res)
joke_num = res['total_jokes']
if joke_num > 1:
    print(f"{joke_num} jokes on {search_word} found!")
elif joke_num == 1:
    print(f"There is only {joke_num} on {search_word}!")
else:
    print("No jokes found. SORRY!")


dad_jokes = res['results']
joke = choice(dad_jokes)['joke']

joke_format = pyfiglet.figlet_format(joke, font='bubble')
text = colored(joke_format, color='cyan')

print(text)



