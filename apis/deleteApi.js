const db = require("../db");

const deleteApi = async (req, res) => {
  const { id } = req.params;

  try {
    const queryText = "DELETE FROM todos WHERE id = $1 RETURNING *";
    const result = await db.query(queryText, [id]);

    if (!result || !result.rows || result.rows.length === 0) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    return res.status(200).json({
      message: "Todo deleted successfully",
      deletedItem: result.rows[0],
    });
  } catch (error) {
    console.log("Delete Api error", error.stack);
    return res.status(500).json({ error: "Delete Api error" });
  }
};

module.exports = deleteApi;
