import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Username from "../models/user";
import { NextResponse } from "next/server";
import {hashPassword} from "../middleware/middleware";

export async function POST(req) {

    let user = await req.json();

    //Middleware
    let hashedUser = await hashPassword(user);

    try {
        await connectMongoDB();

        let doesUsernameAlreadyExist = await Username.findOne({username: hashedUser.username});

        if (doesUsernameAlreadyExist) {
            return NextResponse.json({
                status: false,
                error: "Username already exists",
            });
        }

        await Username.create(hashedUser);

        return NextResponse.json({
            status: true,
            error: "User created successfully",
        });

    } catch (error) {
        return NextResponse.json({
            status: false,
            error: error.message
        });
    }
}