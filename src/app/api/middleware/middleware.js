const bcrypt = require('bcrypt');
const saltRounds = 10;



export const hashPassword = async (req) => {
    console.log("Hashing password");
    req.password = await bcrypt.hash(req.password, saltRounds);
    console.log("Password hashed");

    return req;
}