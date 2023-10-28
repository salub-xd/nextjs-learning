import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request) {
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken);
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log("jwt val :", data);
    console.log('data');
    const user = await User.findById(data._id).select("-password");
    console.log('user val : ', user);
    return NextResponse.json(user)
}