import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Username from "../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json()
        await connectMongoDB()
        await Username.insertMany(body.usernames)

        return new NextResponse('OK')
    } catch (error) {
        const res = {
            message: "Error Occurred in register route",
            error: error
        }
        return NextResponse.json(res)
    }
}

// export async function GET(req) {
//     try {
//         await connectMongoDB()
//         const projects = await Project.find({})
//         return NextResponse.json(projects)
//     } catch (error) {
//         const res = {
//             message: "Error Occurred",
//             error: error
//         }
//         return NextResponse.json(res)
//     }
// }