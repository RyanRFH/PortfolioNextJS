import { connect } from "mongoose";
import connectMongoDB from "../../libs/db";
import Project from "../../models/project";
import { NextResponse } from "next/server";

//Destructured params object, to get inner params object
export async function GET(req, {params}) {
    try {
        const projId = await params.id
        await connectMongoDB()
        const project = await Project.findOne({_id: projId})
        if (!project) {
            throw new Error("Project not found")
        }
        return NextResponse.json({ project })

    } catch (error) {
        const res = {
            message: "Error Occurred",
            error: error
        }
        return NextResponse.json(res)
    }

}