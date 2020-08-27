const express = require('express');
const users = express.Router();
const userController = require("../controllers/users");

// users
users.post("/add", userController.createUser);
users.get("/getAll", userController.getUser);
users.put("/:id", userController.updateUser);
users.delete("/:id", userController.delete);
users.get("/:id", userController.getUserById);

module.exports = users;