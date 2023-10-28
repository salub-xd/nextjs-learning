import { NextResponse } from "next/server"

export const responseMessage = async (message, successStatus, statusCode) => {
    return NextResponse.json({
        message: message,
        success: successStatus,

    },
        { status: statusCode, });
}