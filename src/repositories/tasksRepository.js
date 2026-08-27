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

// update tasks
function updateTask(id, updates) {
    const updatedTask = tasks.find(task => task.id === id);
    if(!updatedTask) {
        return updatedTask;
    }
    if("title" in updates) {
        updatedTask.title = updates.title;
    }

    if("done" in updates) {
        updatedTask.done = updates.done;    
    }

    return updatedTask;
}

// delete tasks
function deleteTask(id) {
    const deletedTask = tasks.find(task => task.id === id);
    if(!deletedTask) {
        return deletedTask;
    }
    const deleteItemIndex = tasks.findIndex(task => task.id === deletedTask.id);
    tasks.splice(deleteItemIndex, 1);

    return deletedTask;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}