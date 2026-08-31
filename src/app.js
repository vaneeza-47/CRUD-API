const express = require('express');
const tasksRouter = require('./routes/tasksRoutes');
const swagger_ui = require("swagger-ui-express");
const openapiSpec = require("../openapi.json");

const app = express();
app.use(express.json());
app.use('/docs', swagger_ui.serve, swagger_ui.setup(openapiSpec));
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