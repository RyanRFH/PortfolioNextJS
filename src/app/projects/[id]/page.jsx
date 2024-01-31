import React from 'react';

import ProjectBlock from "../../components/ProjectBlock";

async function getProject(id) {
    //Object argument sets data revalidation time in seconds
    const res = await fetch(`http://localhost:4000/projects/${id}`, {
        next: {
            revalidate: 0 //Using 0 opts our of using cache
        }
    })
    return res.json()
}

async function getProjects() {
    //Object argument sets data revalidation time in seconds
    const res = await fetch(`http://localhost:4000/projects`, {
        next: {
            revalidate: 0 //Using 0 opts our of using cache
        }
    })
    return res.json()
}

//Destructured props to get the params object directly
const ProjectDetails = async ({ params }) => {
    const id = params.id
    const projectData = await getProject(id)
    const projects = await getProjects()
    const projectCount = projects.length

    return (


        <div className="">
            {!projectData.id ?
                <div className='flex items-center justify-center mt-[200px] flex-col'>
                    <p className='text-6xl font-bebas'>PROJECT NOT FOUND</p>
                    <a href='/projects'>
                        <button>
                            Projects
                        </button>
                    </a>
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