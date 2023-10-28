import { connectDb } from "@/helper/db";
import { responseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/Task";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request, { params }) {

    const taskId = params.taskId;

    try {
        const task = await Task.findById(taskId);
        return NextResponse.json({ task });

    } catch (error) {
        console.log(error);
        return responseMessage("failed to get task", false, 404);
    }
}

export async function PUT(request, { params }) {

    const taskId = params.taskId;
    const { title, content, status } = await request.json();

    try {
        const task = await Task.findById(taskId);
        task.title = title;
        task.content = content;
        task.status = status;

        await task.save();
        return NextResponse.json({ task, status: 202 });

    } catch (error) {
        console.log(error);
        return responseMessage("failed to update task", false, 401);

    }
}

export async function DELETE(request, { params }) {

    const taskId = params.workId;

    try {
        const task = await Task.findByIdAndDelete(taskId);
        return NextResponse.json({ message: "task deleted !!", success: true });

    } catch (error) {
        console.log(error);
        return responseMessage("failed to delete task", false, 404);

    }
}

