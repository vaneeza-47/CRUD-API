const express = require('express');
const expressRouter = express.Router();
const taskService = require('../services/taskService');

expressRouter.get('/', (req, res) => {
    return res.json(taskService.getTasks());
});

expressRouter.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = taskService.getTaskById(id);

    if(!task) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    return res.json(task);
});

expressRouter.post('/', (req, res) => {
    const title = req.body.title;
    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Invalid title name"
        });
    }
    const createdTask = taskService.createTask(title);
    return res.status(201).json(createdTask);
});

module.exports = expressRouter;