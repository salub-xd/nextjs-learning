import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    about: {
        type: String,
    },
    profileURL: {
        type: String,
    }
});

export const User = mongoose.models?.users || mongoose.model("users", userSchema);