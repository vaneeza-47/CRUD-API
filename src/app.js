const express = require('express');
const tasksRouter = require('./routes/tasksRoutes')
const app = express();
app.use(express.json());
app.use('/tasks', tasksRouter);


// display home page
app.get('/', (req, res) => {
    res.json({
        "name": "Task API",
        "version": "1.0",
        "endpoints": ["/tasks"]
    });
});

// display health page
app.get('/health', (req, res) => {
    res.json({
        "status": "ok"
    });
});

module.exports = app;