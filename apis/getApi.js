const db = require("../db");

const getApi = async (req, res) => {
  try {
    const queryText = "SELECT * FROM todos ORDER BY id ASC";
    const result = await db.query(queryText);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.log("Get Api Error", error.stack);
    return res.status(500).json({ error: "get api error" });
  }
};

module.exports = getApi;