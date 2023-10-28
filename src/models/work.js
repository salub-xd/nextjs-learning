const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Work = mongoose.models.works || mongoose.model('works', workSchema);