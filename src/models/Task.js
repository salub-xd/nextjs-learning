const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
    userId: {
        type: mongoose.ObjectId,
        required:true,
    }

}, { timestamps: true });

export const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema);