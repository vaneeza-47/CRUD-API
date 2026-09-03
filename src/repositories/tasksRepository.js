const db = require("./database.js");

function getAllTasks(){
    const selectTasks = db.prepare(`SELECT * FROM tasks`).all();
    return selectTasks;
}

function getTaskById(id) {
    const taskById = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
    return taskById;
}

// create tasks
function createTask(title) {
    const prepareData = db.prepare(`INSERT INTO tasks (title, done) VALUES (?, ?)`).run(title, 0);
    const newID = prepareData.lastInsertRowid;
    const newTask = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(newID);
    return newTask;
}

// update tasks
function updateTask(id, updates) {
    const existingTask = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
    if(!existingTask) {
        return null;
    }

    if ("title" in updates) {
        const title = updates.title;
        const updateTitleSQL = db.prepare(`UPDATE tasks SET title = ? WHERE id = ?`).run(title, id);
    }
    if ("done" in updates) {
        const done = updates.done;
        const updateDoneSQL = db.prepare(`UPDATE tasks SET done = ? WHERE id = ?`).run(done, id);
    }

    const updatedTask = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
    
    return updatedTask;
}

// delete tasks
function deleteTask(id) {
    const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(id);
    
    if (!task) {
        return null;
    }
    
    db.prepare(`DELETE FROM tasks WHERE id = ?`).run(id);
    return task;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}