# http://quotes.toscrape.com
import  requests
from bs4 import BeautifulSoup
# class="quote"
# class="author"
# <a href="">

url = "http://quotes.toscrape.com"
page = "/page/1"
all_quotes = []

while page:
    res = requests.get(f"{url}{page}")
    soup = BeautifulSoup(res.text, "html.parser")
    quotes = soup.find_all(class_="quote")

    for quote in quotes:
        text = quote.find(class_="text").get_text()
        author = quote.find(class_="author").get_text()
        link = quote.find('a')['href']
        all_quotes.append({
            'text': text,
            'author': author,
            'link': link
        })
        next_button = soup.find(class_='next')
        page = next_button.find("a")['href'] if next_button else None


print(all_quotes)
