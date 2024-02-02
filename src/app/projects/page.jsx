import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';

async function getProjects() {
    //Object argument sets data revalidation time in seconds
    const res = await fetch(`${process.env.API_URL}/api/projects-data`, {
        next: {
            revalidate: 0 //Using 0 opts our of using cache
        }
    })
    const data = await res.json()
    return data.projects
}

const page = async () => {
    const projects = await getProjects()

    return (
        <div className="mt-[80px] lg:ml-[100px] mb-[50px]">
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl ml-[20px]">Projects</h1>
            <div className='mt-[50px] flex justify-evenly flex-wrap'>

                {/* Check if projects are found */}
                {projects.length === 0 && (
                    <h1 className='text-6xl font-bebas'>No Projects Found</h1>
                )}
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectThumbnail projDesc={project.projectDesc} projName={project.projectName} projImg={project.projectImages[0].url} projLink={`/projects/${project.id}`}/>
                        </div>

                    )

                })}
            </div>

        </div>
    );
};

export default page;