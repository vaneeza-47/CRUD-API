const express = require('express');
const expressRouter = express.Router();
const taskService = require('../services/taskService');

// display current tasks
expressRouter.get('/', async (req, res) => {
    const tasks = await taskService.getTasks();
    return res.json(tasks);
});

// display specific task
expressRouter.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const task = await taskService.getTaskById(id);

    if(!task) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    return res.json(task);
});

// create task
expressRouter.post('/', async (req, res) => {
    const title = req.body.title;
    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Invalid title name"
        });
    }
    const createdTask = await taskService.createTask(title);
    return res.status(201).json(createdTask);
});

// update task
expressRouter.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const updates = req.body;
    const title = updates.title;
    const done = updates.done;

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({
            error: "Nothing to update"
        })
    }

    if ("title" in updates) {
            if (!title || title.trim() === "") {
                return res.status(400).json({
                error: "Invalid title name"
            });
        }
    }

    if ("done" in updates) {
        if (typeof done !== "boolean") {
            return res.status(400).json({
                error: "Invalid done status (Use Boolean Values)"
            })
        }
    }

    const updatedTask = await taskService.updateTask(id, updates);

    if(!updatedTask) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    return res.status(200).json(updatedTask);
});

//delete task
expressRouter.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const deletedTask = await taskService.deleteTask(id);

    if(!deletedTask) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    return res.sendStatus(204);
});


module.exports = expressRouter;