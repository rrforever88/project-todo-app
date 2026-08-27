# project-todo-app

A simple REST API for managing to-do items, built with Node.js, Express, and SQLite.

## Stack

- **Express 5** — HTTP server
- **Knex** — SQLite query builder
- **SQLite3** — local database
- **body-parser** — JSON request parsing

## Setup

```bash
git clone <repo-url>
cd project-todo-app
npm install
npm start
```

Server runs at `http://localhost:1337`.

## API Endpoints

### Get all items
```
GET /ToDoItems
```

### Get one item
```
GET /ToDoItems/:id
```

### Create an item
```
POST /ToDoItems
Content-Type: application/json

{ "title": "Buy milk" }
```

### Update an item
```
PATCH /ToDoItems/:id
Content-Type: application/json

{ "title": "Buy oat milk" }
```

### Delete an item
```
DELETE /ToDoItems/:id
```
