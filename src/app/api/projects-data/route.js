import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Project from "../models/project";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json()
        connectMongoDB()
        await Project.insertMany(body)

        return new NextResponse('OK')
    } catch (error) {
        const res = {
            message: "Error Occurred",
            error: error
        }
        return NextResponse.json(res)
    }


}

export async function GET() {
    try {
        connectMongoDB()
        const projects = await Project.find({})
        return NextResponse.json(projects)
    } catch (error) {
        const res = {
            message: "Error Occurred",
            error: error
        }
        // return NextResponse.json(res)
    }

}