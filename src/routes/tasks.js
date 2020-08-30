
const express = require('express');
const tasks = express.Router();
const tasksController = require("../controllers/tasks");

// notes
tasks.post("/add", tasksController.createTask);
tasks.get("/", tasksController.getTasks);
tasks.delete("/delete/:id", tasksController.deleteTask);
tasks.put("/edit/:id", tasksController.updateTasks);
tasks.put("/unassign/:id", tasksController.unassignUser);
tasks.post("/search", tasksController.searchTasks);
tasks.get("/:id", tasksController.getTaskById);

module.exports = tasks;