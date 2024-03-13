const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPassword = async (req) => {
    req.password = await bcrypt.hash(req.password, saltRounds);
    return req;
}