const db = require("./db");

const createTableQuery = ` 
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false
)`;

const initializeDatabase = async () => {
  try {
    await db.query(createTableQuery);
    console.log('"todos" table verified/created successfully.');
  } catch (error) {
    console.error("Error initializing database:", error.message);
  }
};

module.exports = initializeDatabase;
