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

tasksController.getTaskById = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    res.status(200).json({ message: "ok", body: task });
};

tasksController.updateTasks = async (req, res) => {
    const { id } = req.params;
    const task = req.body;
    try {
        const newTask = await Task.findOneAndUpdate(
            { _id: id },
            {
                title: task.title,
                content: task.content,
                author: task.author,
                status: task.status,
                date: task.date,
            }
        );
        res.status(200).json({ message: "ok", body: newTask });
    } catch (e) {
        res.status(400).json({ message: "error", exception: e });
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