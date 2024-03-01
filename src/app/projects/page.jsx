import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';
import { NextResponse } from 'next/server';

async function getProjects() {
    //Next object argument sets data revalidation time in seconds
    try {
        const res = await fetch(`${process.env.API_URL}api/projects-data`, {
            method: "GET",
            next: {
                revalidate: 0 //Using 0 opts our of using cache
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        const errorMessage = "error in getProjects()"
        console.log(errorMessage)
        return { error: errorMessage }
    }

}

const page = async () => {
    const projects = await getProjects()

    //Error handling
    let projectsErrorFlag = ""
    if (!projects) {
        //Triggers an error if the returned data is null
        projectsErrorFlag = "getProjects() returned null"
    } else if (projects.error) {
        //Triggers an error if there is an error key in the data object
        projectsErrorFlag = "getProjects() encountered an error"
    } else if (!projects[0]?._id) {
        //Triggers an error if the first element in the data doesn't contain an ID (bad data)
        projectsErrorFlag = "getProjects() returned bad data"
    }


    return (
        <div className="mt-[80px] lg:ml-[100px] mb-[50px]">
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl ml-[20px]">Projects</h1>
            <div className='mt-[50px] flex justify-evenly flex-wrap'>
                {/* Check if error flag is triggered */}
                {projectsErrorFlag ?
                    <div>
                        <h1 className='text-6xl font-bebas'>No Projects Found</h1>
                        <h1>{projectsErrorFlag}</h1>
                    </div>

                    :
                    projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <ProjectThumbnail projDesc={project.projectDesc} projName={project.projectName} projImg={project.projectImages[0].url} projLink={`/projects/${project._id}`} />
                            </div>

                        )

                    })}


            </div>

        </div>
    );
};

export default page;