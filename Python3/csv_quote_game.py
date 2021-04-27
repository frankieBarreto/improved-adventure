import requests
from bs4 import BeautifulSoup
from random import choice
from time import sleep
from csv import DictReader

def read_quotes(filename):
    with open(filename, 'r')as file:
        csv_reader = DictReader(file)
        quotes = list(csv_reader)
        return quotes


url = 'http://quotes.toscrape.com'
def start_game(all_quotes):
    quote = choice(all_quotes)
    author = quote['author']
    text = quote['text']
    link = quote['link']

    guess = ""
    attempts = 5
    while guess.lower() != author and attempts != 0:
        print(f"{text}\n\nremaining attempts: {attempts}\n")
        guess = input(f"Who said this quote? ")
        if guess.lower() != author.lower(): attempts -= 1
        if attempts == 3:
            res = requests.get(f"{url}{link}")
            soup = BeautifulSoup(res.text, "html.parser")
            birth_date = soup.find(class_="author-born-date").get_text()
            loc = soup.find(class_="author-born-location").get_text()
            print(f"HINT: The Author was born on {birth_date} {loc}\n")
        elif attempts == 2:
            print(f"HINT: Authors first name starts with: {author[0].upper()}\n")
        elif attempts == 1:
            last_initial = author.split(" ")[1][0]
            print(f"HINT: Authors last name starts with: {last_initial}")
        elif attempts == 0:
            print(f"Sorry no more tries! The answer is {author}")

    again = ""
    while again.lower() not in ("y", "yes", "n", "no"):
        again = input("Would you like to play again (y/n)? ")
        if again.lower() in ("yes", "y"):
            print("\nStart!\n")
            return start_game()
        else:
            print("Goodbye!")
            break

quotes = read_quotes('quotes.csv')
start_game(quotes)