import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
connectDb();

export async function GET(request) {
    try {

        const users = await User.find().select("-password");
        const response = NextResponse.json(users, { status: 201 });
        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "failed to get users !!", status: false }, { status: 404 })
    }
}

// create user
export async function POST(request) {
    // fetch user details from request

    const { name, email, password, about, profileURL } = await request.json();

    // create user object with user model
    const user = new User({
        name, email, password, about, profileURL
    })
    try {

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)

        console.log({ name, email, password, about, profileURL });

        const createUser = await user.save();
        const response = NextResponse.json(createUser, { status: 201 });
        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "failed to create user !!", status: false }, { status: 500 });
    }

}

export function DELETE() {
    console.log("deleted api called")
    return NextResponse.json({
        message: "deleted !!",
        status: true,
    });
}