const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({ connectionString:process.env.DATABASE_URL });

async function initDB() {
    await pool.query(`CREATE TABLE IF NOT EXISTS tasks(
            id SERIAL PRIMARY KEY,
            title TEXT,
            done BOOLEAN DEFAULT false
        )`);
    console.log("Tasks table ready!")
    const result = await pool.query(`SELECT COUNT(*) FROM tasks`);
    const count = parseInt(result.rows[0].count);

    // seeding tasks
    if (count === 0) {
        console.log("Seeding tasks")
        await pool.query(`INSERT INTO tasks(title) VALUES ($1)`, ["Learn Docker commands"]);
        await pool.query(`INSERT INTO tasks(title) VALUES ($1)`, ["Learn new JS syntax"]);
        await pool.query(`INSERT INTO tasks(title) VALUES ($1)`, ["Deal with bellyache"]);
        const result = await pool.query(`SELECT * FROM tasks`)
        console.log(result.rows);   
    } else {
        console.log(`${count} tasks found`);
        const result = await pool.query(`SELECT * FROM tasks`);
        console.log(result.rows); 
    }
}

initDB();
module.exports = pool;