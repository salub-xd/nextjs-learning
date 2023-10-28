import { responseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/Task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request, { params }) {

    const userId = params.userId;
    try {
        const tasks = await Task.find({ userId: userId });
        console.log(tasks);
        return NextResponse.json(tasks);

    } catch (error) {
        console.log(error);
        return responseMessage('failed to get tasks !!', false, 404)
    }
}