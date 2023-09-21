const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/todo-fullstack", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("💻 Mongodb Connected"))
    .catch((err) => console.error(err));

module.exports = connectDB;
