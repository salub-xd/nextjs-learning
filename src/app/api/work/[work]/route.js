import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request, { params }) {

    const workId = params.workId;

    try {
        const works = await Work.findById(workId);
        return NextResponse.json({ works });

    } catch (error) {
        return NextResponse.json({ message: "failed to get work" });

    }
}

export async function PUT(request, { params }) {

    const workId = params.workId;
    const { title, content } = await request.json();

    try {
        const work = await Work.findById(workId);
        work.title = title;
        work.content = content;
        await work.save();
        return NextResponse.json({ work });

    } catch (error) {
        return NextResponse.json({ message: "failed to update work" });

    }
}

export async function DELETE(request, { params }) {

    const workId = params.workId;

    try {
        const work = await Work.findByIdAndDelete(workId);
        return NextResponse.json({ message: "work deleted !!" });

    } catch (error) {
        return NextResponse.json({ message: "failed to delete work" });

    }
}

