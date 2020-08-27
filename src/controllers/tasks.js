const Task = require("../models/Task");
const tasksController = {};

tasksController.createTask = async (req, res) => {
    const task = req.body;
    try {
        const newTask = new Task({
            title: task.title,
            content: task.content,
            author: task.author,
            status: task.status
        });

        await newTask.save();
        console.log("Task saved")

        res.status(200).json({ message: "ok", body: newTask });
    } catch (e) {
        res.status(400).json({ message: "bad request", e: e });
    }
}

tasksController.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ message: "ok", body: tasks });
    } catch (e) {
        res.status(400).json({ message: "bad request", e: e });
    }
};

tasksController.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskDelete = await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "ok", body: taskDelete });
    } catch (e) {
        res.status(400).json({ message: "error", exception: e });
    }
};



module.exports = tasksController;