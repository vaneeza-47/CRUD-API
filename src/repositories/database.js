const sqlite = require("better-sqlite3");

// Initiate Database
const db = sqlite('tasks.db');
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');
db.pragma('cache_size = 0');

const createTable = `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    done INTEGER
)`;

db.exec(createTable);
console.log("Tasks Table Ready!");

const count = db.prepare(`SELECT COUNT(*) as count FROM tasks`).get();

// Dummy tasks if table is empty
if (count.count === 0) {
    console.log("Seeding example tasks...");
    const dummyData = [
        {title: "Learn better-sqlite3", done: 0},
        {title: "Eat more ice-cream", done: 0},
        {title: "Complete assignment 2", done: 0}
    ];
    const prepareData = db.prepare(`INSERT INTO tasks (title, done) VALUES (?, ?)`);

    dummyData.forEach((task) => {
        prepareData.run(task.title, task.done);
    });

    const selectTasks = "SELECT * FROM tasks";
    const currentTasks = db.prepare(selectTasks).all();
    console.log(currentTasks);
} else {
    console.log(`Found ${count.count} tasks already. Skipping Seeding`);
}

module.exports = db;

