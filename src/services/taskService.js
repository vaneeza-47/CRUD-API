const taskRepository = require("../repositories/tasksRepository");

// display current tasks
async function getTasks() {
    return await taskRepository.getAllTasks();
}

// display specific task
async function getTaskById(id) {
    return await taskRepository.getTaskById(id);
}

// create task
async function createTask(title) {
    return await taskRepository.createTask(title);
}

// update task
async function updateTask(id, updates) {
    return await taskRepository.updateTask(id, updates);
}

//delete task 
async function deleteTask(id) {
    return await taskRepository.deleteTask(id);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}