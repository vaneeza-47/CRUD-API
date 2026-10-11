const pool = require("./database.js");

async function getAllTasks(){
    const selectTasks = await pool.query(`SELECT * FROM tasks`);
    return selectTasks.rows;
}

async function getTaskById(id) {
    const taskById = await pool.query(`SELECT * FROM tasks WHERE id = ($1)`, [id]);
    return taskById.rows[0];
}

// create tasks
async function createTask(title) {
    const done = false;
    const prepareData = await pool.query(`INSERT INTO tasks (title, done) VALUES ($1, $2) RETURNING *`, [title, done]);
    return prepareData.rows[0];
}

// update tasks
async function updateTask(id, updates) {
    const existingTask = await pool.query(`SELECT * FROM tasks WHERE id = ($1)`, [id]);
    if(!existingTask.rows[0]) {
        return null;
    }

    if ("title" in updates) {
        const title = updates.title;
        const updateTitleSQL = await pool.query(`UPDATE tasks SET title = ($1) WHERE id = ($2)`, [title, id]);
    }
    if ("done" in updates) {
        const done = updates.done;
        const updateDoneSQL = await pool.query(`UPDATE tasks SET done = ($1) WHERE id = ($2)`, [done, id]);
    }

    const updatedTask = await pool.query(`SELECT * FROM tasks WHERE id = ($1)`, [id]);
    
    return updatedTask.rows[0];
}

// delete tasks
async function deleteTask(id) {
    const task = await pool.query(`SELECT * FROM tasks WHERE id = ($1)`, [id]);
    
    if (!task.rows[0]) {
        return null;
    }
    
    await pool.query(`DELETE FROM tasks WHERE id = ($1)`, [id]);
    return task.rows[0];
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}