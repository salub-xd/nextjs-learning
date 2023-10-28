import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request, { params }) {
    const userId = params.userId;

    try {
        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json({ user });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to get user !!",
        });
    }

}

// Update user

export async function PUT(request, { params }) {

    // const body = request.body;
    // console.log(body)
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);
    // // const jsonData = await request.json();
    // // console.log(jsonData);
    // const textData = await request.text();
    // console.log(textData);

    const { name, password, about, profileURL } = await request.json();
    const userId = params.userId;
    // console.log(userId);

    try {
        const user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updateUser = await user.save();

        return NextResponse.json({
            message: "user updated !!", updateUser
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to update user !!",
        });
    }


}

// DELETE User
export async function DELETE(request, { params }) {
    const userId = params.userId;
    console.log(userId);

    try {
        await User.findByIdAndDelete(userId);
        return NextResponse.json({
            message: "user deleted !!",
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to delete user !!",
        });
    }
}