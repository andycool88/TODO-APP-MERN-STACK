const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  toggleTodostatus,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/todos", getTodos);
router.post("/todo/new", createTodo);
router.delete("/todo/delete/:id", deleteTodo);
router.get("/todo/toggleStatus/:id", toggleTodostatus);

module.exports = router;
