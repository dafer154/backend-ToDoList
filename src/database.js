const mongoose = require('mongoose');

const URI = 'mongodb://localhost/todo-list'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const conection = mongoose.connection;

conection.once("open", () => {
    console.log("db is connected!");
});