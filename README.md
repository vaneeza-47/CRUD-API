```markdown
# Task API

This is a simple API that manages a to-do list. You can create tasks, read them, update them, and delete them (CRUD operations).

## Getting Started

### What you need
- Node.js installed on your computer ([download here](https://nodejs.org/))

### How to run
1. Open terminal in the project folder 
2. Install dependencies using command `npm install`
3. Start the server by using command `node index.js`
4. Open your browser and go to `http://localhost:3000`

## API Endpoints

| Method | Endpoint | What it does | Success | Errors |
|--------|----------|--------------|---------|--------|
| GET | `/` | Shows API info | 200 | - |
| GET | `/health` | Health check | 200 | - |
| GET | `/tasks` | Get all tasks | 200 | - |
| GET | `/tasks/:id` | Get one task | 200 | 404 |
| POST | `/tasks` | Create a task | 201 | 400 |
| PUT | `/tasks/:id` | Update a task | 200 | 400, 404 |
| DELETE | `/tasks/:id` | Delete a task | 204 | 404 |

## Swagger UI

Interactive documentation is available at `http://localhost:3000/docs`

![Swagger UI Screenshot](taskAPIScreenshot.png)

## Example

```bash
$ curl -i http://localhost:3000/tasks/1

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"id":1,"title":"Learn Node.js","done":false}
```

## Note

Tasks are stored in memory only. If you restart the server, all changes are lost.

## Note for Windows PowerShell Users

If you're using PowerShell on Windows, use `Invoke-RestMethod` instead of `curl`:

```powershell
Invoke-RestMethod -Uri http://localhost:3000/tasks -Method Post -ContentType "application/json" -Body '{"title":"Buy milk"}'
```

For other requests:

- **GET**: `Invoke-RestMethod -Uri http://localhost:3000/tasks`
- **PUT**: `Invoke-RestMethod -Uri http://localhost:3000/tasks/1 -Method Put -ContentType "application/json" -Body '{"done":true}'`
- **DELETE**: `Invoke-RestMethod -Uri http://localhost:3000/tasks/1 -Method Delete`
```
