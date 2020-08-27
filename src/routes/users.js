const express = require('express');
const users = express.Router();
const userController = require("../controllers/users");

// users
users.post("/add", userController.createUser);
users.get("/getAll", userController.getUser);
// users.put("/users/:id", userController.updateUser);
// users.delete("/users/:id", userController.delete);
// users.get("/users/:id", userController.getUserById);

module.exports = users;