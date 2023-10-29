import { responseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/Task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request, { params }) {

    const userId = params.userId;
    try {
        const tasks = await Task.find({ userId: userId });
        const response =  NextResponse.json(tasks);
        // console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        return responseMessage('failed to get tasks !!', false, 404)
    }
}