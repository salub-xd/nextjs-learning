import { connectDb } from "@/helper/db";
import { responseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/Task";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {

    try {
        const tasks = await Task.find();
        return NextResponse.json({ tasks });

    } catch (error) {
        return responseMessage("failed to get task", false, 404)

    }
}

export async function POST(request) {

    const { title, content, userId } = await request.json();

    try {
        const task = new Task({ title, content, userId });
        const createdTask = await task.save();
        return NextResponse.json({ createdTask, status: 201 });

    } catch (error) {
        console.log(error);
        return responseMessage("failed to add task", false, 401)
    }
}