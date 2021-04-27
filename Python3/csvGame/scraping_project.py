# http://quotes.toscrape.com
import requests
from bs4 import BeautifulSoup
from random import choice
from time import sleep
from csv import DictWriter

from requests.sessions import default_headers
# class="quote"
# class="author"
# <a href="">

url = "http://quotes.toscrape.com"
def scrape_quotes(url):
    page = "/page/1"
    all_quotes = []
    while page:
        res = requests.get(f"{url}{page}")
        # print(f"Scraping {url}{page} Now...")
        soup = BeautifulSoup(res.text, "html.parser")
        quotes = soup.find_all(class_="quote")

        for quote in quotes:
            text = quote.find(class_="text").get_text()
            author = quote.find(class_="author").get_text()
            link = quote.find('a')['href']
            all_quotes.append({
                'text': text,
                'author': author,
                'link': link,
            })
            next_button = soup.find(class_='next')
            page = next_button.find("a")['href'] if next_button else None
            sleep(2)
    return all_quotes



def start_game():
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

# start_game()

def write_quotes():
    with open("quotes.cvs", "w") as file:
        headers = ['text', 'author', 'link']
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for quote in all_quotes:
            csv_writer.writerow(quote)

all_quotes = scrape_quotes(url)
write_quotes(all_quotes)