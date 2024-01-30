import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';

async function getProjects() {
    //Object argument sets data revalidation time in seconds
    const res = await fetch('http://localhost:4000/projects', {
        next: {
            revalidate: 0 //Using 0 opts our of using cache
        }
    })
    return res.json()
}

const page = async () => {
    const projects = await getProjects()

    return (
        <div className="mt-[80px] ml-[5px] lg:ml-[100px] lg:min-h-[590px] mb-[50px]">


            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl">Projects</h1>
            <div className='mt-[50px] flex justify-evenly flex-wrap'>

                {/* Check if projects are found */}
                {projects.length === 0 && (
                    <h1 className='text-6xl font-bebas'>No Projects Found</h1>
                )}

                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectThumbnail projName={project.projectName} projImg={project.projectImages[0].url} projLink={`/projects/${project.id}`}/>
                        </div>

                    )

                })}
            </div>

        </div>
    );
};

export default page;