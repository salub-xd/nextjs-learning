import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {

    try {
        const works = await Work.find();
        return NextResponse.json({ works });

    } catch (error) {
        return NextResponse.json({ message: "failed to get works" });

    }
}

export async function POST(request) {

    const { title, content } = await request.json();

    try {
        const work = new Work({ title, content, });
        await work.save();
        return NextResponse.json({ work });

    } catch (error) {
        return NextResponse.json({ message: "failed to add works" });

    }
}