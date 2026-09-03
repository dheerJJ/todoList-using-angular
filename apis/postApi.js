const db = require("../db");
const postApi = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const queryText = "INSERT INTO todos(title) VALUES ($1) RETURNING *";
    const values = [title];
    const reuslt = await db.query(queryText, values);

    return res.status(200).json(reuslt.rows[0]);
  } catch (error) {
    console.log("Post Api error", error.stack);
    res.status(500).json({ error: "Post Api error" });
  }
};

module.exports = postApi;
