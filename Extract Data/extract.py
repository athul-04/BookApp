import requests
from bs4 import BeautifulSoup
import pandas as pd
import json

book_data = []
no_of_pages = 50
base_url = "https://books.toscrape.com/catalogue/"

for i in range(1, no_of_pages + 1):
    url = f"{base_url}page-{i}.html"
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")

    for e in soup.select("article"):
        title = e.h3.get_text(strip=True)
        price = e.select_one(".price_color").text[2:]
        image_url = e.select_one(".image_container img")["src"].replace("../", "https://books.toscrape.com/")
        
        book_data.append({
            "title": title,
            "price": price,
            "image_url": image_url
        })

# Save data to a JSON file
with open("books.json", "w", encoding="utf-8") as f:
    json.dump(book_data, f, indent=4)

print("Scraping completed! Data saved to books.json")
