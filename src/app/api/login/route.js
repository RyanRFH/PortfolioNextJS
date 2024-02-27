import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Username from "../models/user";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();
        await connectMongoDB();
        console.log(body);
        const user = await Username.findOne({username: body.username})

        if (!user) {
            throw new Error("Details were incorrect");
        }
        return NextResponse.json({ user });

    } catch (error) {
        const res = {
            message: "Error Occurred in login route",
            error: error
        }
        return NextResponse.json(res)
    }

}