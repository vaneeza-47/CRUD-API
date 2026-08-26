const taskRepository = require("../repositories/tasksRepository");

function getTasks() {
    return taskRepository.getAllTasks();
}

function getTaskById(id) {
    return taskRepository.getTaskById(id);
}

function createTask(title) {
    return taskRepository.createTask(title);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}