require("dotenv").config();
const express = require("express");
const initializeDatabase = require("./initDB");
const postApi = require("./apis/postApi");
const getApi = require("./apis/getApi");
const updateApi = require("./apis/putApi");
const deleteApi = require("./apis/deleteApi");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
initializeDatabase();

app.post("/api/todo", postApi);
app.get("/api/todo", getApi);
app.put("/api/todo/:id", updateApi);
app.delete("/api/todo/:id", deleteApi);

app.listen(PORT, () => {
  console.log(`
██████╗ ██╗  ██╗███████╗███████╗██████╗  █████╗      ██╗     ██╗
██╔══██╗██║  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗     ██║     ██║
██║  ██║███████║█████╗  █████╗  ██████╔╝███████║     ██║     ██║
██║  ██║██╔══██║██╔══╝  ██╔══╝  ██╔══██╗██╔══██║██   ██║██   ██║
██████╔╝██║  ██║███████╗███████╗██║  ██║██║  ██║╚█████╔╝╚█████╔╝
╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝  ╚════╝
`);
});
