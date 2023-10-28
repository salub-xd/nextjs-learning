import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
connectDb();

export async function POST(request) {

    const { email, password } = await request.json();
    try {

        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("user not found !!")
        }

        const matchedPass = bcrypt.compareSync(password, user.password);
        if (!matchedPass) {
            throw new Error("password not matched !!")
        }

        // jwt generate token

        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY);

        console.log(user);
        console.log(token);
        // create nextresponse and cookie
        const response = NextResponse.json({ message: "login success !!", success: true,user:user }, { status: 202 })
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        })

        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message, success: false }, { status: 500 })
    }
}