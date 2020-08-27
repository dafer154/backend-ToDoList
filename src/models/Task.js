const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
    {
        title: String,
        content: { type: String, required: true },
        author: { type: String },
        status: { type: String },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
);

module.exports = model("Task", TaskSchema);