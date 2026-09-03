const db = require("../db");

const updateApi = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const checkQuery = "SELECT * FROM todos WHERE id = $1";
    const checkResult = await db.query(checkQuery, [id]);

    if (!checkResult || !checkResult.rows || checkResult.rows.length === 0) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    const currentTodo = checkResult.rows[0];
    const newTitle = title !== undefined ? title : currentTodo.title;
    const newCompleted =
      completed !== undefined ? completed : currentTodo.completed;

    const updateQuery ="UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *";
    const result = await db.query(updateQuery, [newTitle, newCompleted, id]);

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Update Api error", error.stack);
    return res.status(500).json({ error: "Update Api error" });
  }
};

module.exports = updateApi;
