import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        id: String,
        projectName: String,
        projectDesc: String,
        projectApp: String,
        projectCode: String,
        projectTech: Array,
        projectImages: Array
    }
)


//Checks if Project model already exists, if not then create it
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)

export default Project;