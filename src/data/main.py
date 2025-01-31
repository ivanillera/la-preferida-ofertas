# WORK IN PROGRESS

import json
import requests
from bs4 import BeautifulSoup

def get_image_url(query):
    search_url = f"https://www.google.com/search?tbm=isch&q={query}"
    response = requests.get(search_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    image_url = soup.find('img')['src']
    return image_url

def parse_string_to_json(input_string):
    parts = input_string.split(' ')
    title = ' '.join(parts[:-2])
    price = parts[-1]
    category = "Unknown"  # You can implement a better category detection logic here
    image_url = get_image_url(title)

    result = {
      "image": image_url,
      "title": title,
      "price": price,
      "description": "",
      "category": category
    }
    return json.dumps(result, indent=2)

input_string = "morrón rojo kg $1490.00"
print(parse_string_to_json(input_string))