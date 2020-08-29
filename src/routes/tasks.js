
const express = require('express');
const tasks = express.Router();
const tasksController = require("../controllers/tasks");

// notes
tasks.post("/add", tasksController.createTask);
tasks.get("/getAll", tasksController.getTasks);
tasks.delete("/:id", tasksController.deleteTask);
tasks.put("/:id", tasksController.updateTasks);
tasks.put("/unassignUser/:id", tasksController.unassignUser);
tasks.get("/:id", tasksController.getTaskById);

module.exports = tasks;