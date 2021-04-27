from bs4 import BeautifulSoup
html = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>First HTML Page</title>
</head>
<body>
  <div id="first">
    <h3 data-example="yes">hi</h3>
    <p>more text.</p>
  </div>
  <ol>
    <li class="special super-special">This list item is special.</li>
    <li class="special">This list item is also special.</li>
    <li>This list item is not special.</li>
  </ol>
  <div data-example="yes">bye</div>
</body>
</html>
"""


# SECTION SELECTING with beautiful soup
soup = BeautifulSoup(html, "html.parser")
# print(soup.body.div["id"])
# print(soup.body.ol)
# print(soup.body.div)
# print(soup.find("div"))
# print(soup.find(id='first'))
# # print(soup.find_all("li"))
# print(soup.find_all(class_='special'))
# print(soup.find_all(attrs={'data-example': 'yes'}))

# data = soup.select("[data-example]") # [] for attributes
# data = soup.select("#first") #  # for id
# data = soup.select(".special") #  . for class

# el = data[0]
# text = el.get_text()
# # attr = el.attrs
# attr = soup.find("h3")["data-example"]
# name = el.name

# print(attr)


# data = soup.body.contents[1].next_sibling.next_sibling
# data = soup.find(class_="super-special").parent.parent
# data = soup.find(id='first').find_next_sibling()
data = soup.select("[data-example]")[1].find_previous_sibling()
data = soup.find("h3").find_parent("html")
print(data)









