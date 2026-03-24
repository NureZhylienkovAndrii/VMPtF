import json
import os

data = {
    "books": [
        {"title": "1984", "author": "George Orwell"},
        {"title": "Майстер і Маргарита", "author": "Булгаков"}
    ]
}

with open("books.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("JSON файл створено!")
print("Файли в поточній директорії:", os.listdir())

with open("books.json", "r", encoding="utf-8") as file:
    print("Вміст books.json:")
    print(file.read())