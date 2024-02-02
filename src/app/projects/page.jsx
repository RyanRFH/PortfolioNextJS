import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';
import { NextResponse } from 'next/server';

async function getProjects() {
    //Object argument sets data revalidation time in seconds
    try {
        
        const res = await fetch(`/api/projects-data`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            next: {
                revalidate: 0 //Using 0 opts our of using cache
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log("error in getProjects()")
        return { error: "error" }
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
    } else if (!projects[0]?.id) {
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
                        <p>error</p>
                        {`${process.env.API_URL}/api/projects-data`}
                    </div>

                    :
                    projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <ProjectThumbnail projDesc={project.projectDesc} projName={project.projectName} projImg={project.projectImages[0].url} projLink={`/projects/${project.id}`} />
                            </div>

                        )

                    })}


            </div>

        </div>
    );
};

export default page;