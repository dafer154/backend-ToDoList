const express = require('express');
const path = require('path');
const cors = require("./middlewares/cors")
require("./database");
//Routes
const tasks = require("./routes/tasks");
const users = require("./routes/users");


const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());
app.use(cors({ origin: true }));
app.options("*", cors());

//Routes
app.use('/tasks', tasks);
app.use('/users', users);

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});