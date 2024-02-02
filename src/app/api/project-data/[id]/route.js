import { connect } from "mongoose";
import connectMongoDB from "../../libs/db";
import Project from "../../models/project";
import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         const body = await req.json()
//         connectMongoDB()
//         await Project.insertMany(body)

//         return new NextResponse('OK')
//     } catch (error) {
//         const res = {
//             message: "Error Occurred",
//             error: error
//         }
//         return NextResponse.json(res)
//     }


// }
//Destructured params object, to get inner params object
export async function GET(req, {params}) {
    try {
        const projId = await params.id
        connectMongoDB()
        const project = await Project.findOne({id: projId})
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