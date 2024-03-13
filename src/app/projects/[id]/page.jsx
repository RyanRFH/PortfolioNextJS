// 'use client'

import React from 'react';
import ProjectBlock from "../../components/ProjectBlock";
import Link from 'next/link';

async function getProject(id) {
    try {
        //Object argument sets data revalidation time in seconds
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/project-data/${id}`, {
            method: "GET",
            next: {
                revalidate: 0 //Using 0 opts our of using cache
            }
        })

        const response = await res.json()
        return response.project
    } catch (error) {
        console.log("Error in getProject(id)")
    }

}

async function getProjects() {
    //Object argument sets data revalidation time in seconds
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/projects-data`, {
        method: "GET",
        next: {
            revalidate: 0 //Using 0 opts our of using cache
        }
    })


    const data = await res.json()
    return data
}

//Destructured props to get the params object directly
const ProjectDetails = async ({ params }) => {
    const id = params.id
    const projectData = await getProject(id)
    const projects = await getProjects()

    const projectCount = projects.length

    return (

        <div className="">
            {!projectData?._id ?
                <div className='flex items-center justify-center mt-[200px] flex-col'>
                    <p className='text-6xl font-bebas'>PROJECT NOT FOUND</p>
                    <Link href='/projects'>
                        <button className='buttonblue w-[200px] h-[30px]'>
                            Projects
                        </button>
                    </Link>
                </div>

                :

                <ProjectBlock
                    projectImages={projectData.projectImages}
                    projectName={projectData.projectName}
                    projectDesc={projectData.projectDesc}
                    projectApp={projectData.projectApp}
                    projectCode={projectData.projectCode}
                    projectTech={projectData.projectTech}
                    projectId={id}
                    projectCount={projectCount}
                />
            }


        </div>
    );
};

export default ProjectDetails;