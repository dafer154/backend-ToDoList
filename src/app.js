const express = require("express");
const cors = require("./middlewares/cors")
const path = require('path');

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(cors({ origin: true }));
app.options("*", cors());
const tasks = require("./routes/tasks");
const users = require("./routes/users");

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/tasks', tasks);
app.use('/users', users);

//MAIN
app.get('/', (req, res) => { res.send('REST API - MEAN'); });

module.exports = app;