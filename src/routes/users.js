const express = require('express');
const users = express.Router();
const userController = require("../controllers/users");

// users
users.post("/add", userController.createUser);
users.get("/", userController.getUser);
users.put("/edit/:id", userController.updateUser);
users.delete("/delete/:id", userController.delete);
users.get("/:id", userController.getUserById);
users.post("/search", userController.searchUser);

module.exports = users;