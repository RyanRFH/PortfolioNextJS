import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Username from "../models/user";

const jwt = require("jsonwebtoken")

export async function GET() {

    const cookieStore = cookies();
    const userJWT = cookieStore.get("jwt-token");

    if (!userJWT) {
        return NextResponse.json({
            status: false,
            error: "JWT not found",
        });
    }

    try {
        const checkedJWT = await jwt.verify(userJWT.value, process.env.JWT_SECRET_KEY)

        await connectMongoDB();
        const user = await Username.findOne({ _id: checkedJWT.id })
        user.password = "";

        if (user) {
            return NextResponse.json({
                status: true,
                error: "Log in successful",
                user: user
            });
        } else {
            return NextResponse.json({
                status: false,
                error: "JWT is invalid"
            });
        }




    } catch (error) {
        return NextResponse.json({
            status: false,
            error: error.message
        });

    }

}