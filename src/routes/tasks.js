  
const express = require('express');
const tasks = express.Router();
const tasksController = require("../controllers/tasks");

// notes
tasks.post("/add", tasksController.createTask);
tasks.get("/getAll", tasksController.getTasks);
tasks.delete("/:id", tasksController.deleteTask);
// notes.put("/notes/:id", notesController.updateNotes);
// notes.get("/notes/:id", notesController.getNoteById);

module.exports = tasks;