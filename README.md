# Task API

A RESTful CRUD API for managing tasks, running on PostgreSQL inside Docker.

## Quick Start

1. Copy the environment file:
```
cp .env.example .env
```

2. Start the whole stack with one command:
```
docker compose up
```

Server runs at `http://localhost:3000`  
Swagger UI available at `http://localhost:3000/docs`

## Environment Variables

Copy `.env.example` to `.env` and set the following:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Postgres connection string | `postgres://postgres:dev@localhost:5432/tasks` |

## API Endpoints

| Method | Endpoint | Description | Success Code |
|--------|----------|-------------|--------------|
| GET | `/tasks` | Get all tasks | 200 |
| GET | `/tasks/:id` | Get one task | 200 |
| POST | `/tasks` | Create a task | 201 |
| PUT | `/tasks/:id` | Update a task | 200 |
| DELETE | `/tasks/:id` | Delete a task | 204 |

## Example Request

```
curl -i http://localhost:3000/tasks
```

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

[{"id":1,"title":"Learn Docker commands","done":false},{"id":2,"title":"Learn new JS syntax","done":false},{"id":3,"title":"Deal with bellyache","done":false}]
```

## Database Screenshot

![Database Screenshot](database-screenshot.png)

## Seeded Data

On first run, three example tasks are created automatically:
1. Learn Docker commands
2. Learn new JS syntax
3. Deal with bellyache

## Tech Stack

- Node.js + Express
- PostgreSQL (via Docker)
- pg (node-postgres)
- Docker Compose
- Swagger UI
