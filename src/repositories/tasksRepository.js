// Dummy tasks
const tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        done: false
    },
    {
        id: 2,
        title: "Build a Rest API",
        done: false
    },
    {
        id: 3,
        title: "Learn Git",
        done: false
    }
]

function getAllTasks(){
    return tasks;
}

function getTaskById(id) {
    const task = tasks.find(task => task.id === id);
    return task;
}

// create tasks
function createTask(title) {
    const newId = tasks.at(-1).id + 1;
    const newTask = {
        title: title,
        id: newId,
        done: false
    }

    tasks.push(newTask);
    return newTask;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask
}