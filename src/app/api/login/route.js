import { connect } from "mongoose";
import connectMongoDB from "../libs/db";
import Username from "../models/user";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

export async function POST(req) {
    try {
        const body = await req.json();
        await connectMongoDB();
        const user = await Username.findOne({ username: body.username })
        //Check is user is found
        if (!user) {
            throw Error("Details are incorrect");
        }

        //Check if password matches
        let doesPassMatch = await bcrypt.compare(body.password, user.password)
        if (!doesPassMatch) {
            throw Error("Details are incorrect");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);


        return NextResponse.json({
            status: true,
            error: "Log in successful",
            token: token,
        });

    } catch (error) {
        const res = {
            status: false,
            error: error.message
        }

        return NextResponse.json(res);
    }

}