const Todo = require("../models/todoModel");

//GET CONTROLLERS
const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

//POST CONTROLLERS
const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  todo.save();
  res.json(todo);
};

//DELETE CONTROLLER
const deleteTodo = async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.json(deletedTodo);
};

//STATUS CONTROLLER
const toggleTodostatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.toggleTodostatus = toggleTodostatus;
