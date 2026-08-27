const taskRepository = require("../repositories/tasksRepository");

// display current tasks
function getTasks() {
    return taskRepository.getAllTasks();
}

// display specific task
function getTaskById(id) {
    return taskRepository.getTaskById(id);
}

// create task
function createTask(title) {
    return taskRepository.createTask(title);
}

// update task
function updateTask(id, updates) {
    return taskRepository.updateTask(id, updates);
}

//delete task 
function deleteTask(id) {
    return taskRepository.deleteTask(id);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}