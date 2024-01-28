//Block for displaying projects on project page
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'flowbite-react';

const ProjectBlock = (props) => {
    return (

        <div>
            <div>
                <div className="h-44 m-[5px]">
                    <Carousel slide={false}>
                        <img className='h-full' src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" alt="..." />
                        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" alt="..." />
                    </Carousel>
                </div>

                <h1 className='font-bebas text-2xl'>{props.projectName}</h1>
                <p>{props.projectDesc}</p>
                <div className='mt-[20px]'>
                    <div>{props.projectTech.map((tech, index) => {
                        return (

                            <div key={index} className='grid grid-cols-2 mb-[20px] bg-blue-300'>
                                <p className='flex justify-center items-center'>{tech.name}</p>
                                <p>{tech.desc}</p>
                            </div>
                        )
                    })}</div>
                </div>

            </div>
        </div>
    );
};

export default ProjectBlock;