import { NextResponse } from "next/server"
// const bcrypt = require("bcrypt");

//Middleware in nextJS runs on every route by default (API and page routes), this feature seems mostly useful for creating middleware
//that you want to run on every route in the project
//However I decided to put my middleware in the API folder as it seems more logical

export const middleware = (req) => {
    // return NextResponse.redirect('http://localhost:3000/projects'); //Send response directly from middleware, skipping next() api call
    return NextResponse.next(); // Pass control to the next middleware or route handler
}

//All middleware wil only run on this route
export const config = {
    matcher: ['/api/login']
}