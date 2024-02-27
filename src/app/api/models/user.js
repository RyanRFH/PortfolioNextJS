import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    }
);


//Checks if Username model already exists, if not then create it
const Username = mongoose.models.Username || mongoose.model("Username", userSchema);

export default Username;