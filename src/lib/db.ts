// import Databse from "better-sqlite3";
import path from "path";

const Database = require("better-sqlite3");

const dbPath = path.resolve(process.cwd(), "dev.db");
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    )
    `);

export default db;
