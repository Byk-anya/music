# Проект Music
## Используемые программы:
Visual Studio Code, MAMP PRO, SQLyog.

## Поддерживаемые методы:
GET, POST, PUT, DELETE. (Реализованы на страницах /routes, /albums, /songs)
На странице /routes прописаны коды ответов - 200,201, 401,404, 500.

## Примеры Endpoints
GET localhost:3002/users  - Получить список артистов
GET localhost:3002/users/1 - Получить информацию по артисту с ID1
POST localhost:3002/users - Добавить нового артиста
PUT localhost:3002/users/2 - Обновить данные по артисту с ID2
DELETE localhost:3002/users/3 - Удалить артиста с ID3

Аналогично методы работаю с /albums, /songs.

Сейчас в базе 3 артиста, 6 альбомов, 60 песен. (Разбиты в равном соотношении).

