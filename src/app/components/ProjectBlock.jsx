//Block for displaying projects on project page
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'flowbite-react';

const ProjectBlock = (props) => {
    return (

        <div className='w-full mt-[10px]'>
            <div>
                <div className='flex items-center justify-center'>
                    <h1 className='font-bebas text-2xl bg-yellow-200 p-[10px] rounded-lg'>{props.projectName}</h1>
                </div>

                <div className="h-44 m-[5px]">
                    <Carousel slide={false}>
                        {props.projectImages.map((image, index) => {
                            return (
                                <img key={index} className='h-full' src={image.url} alt={image.alt} />
                            )
                        })}
                    </Carousel>
                </div>
                <div className='flex justify-around mb-[10px]'>
                    <a href={props.projectApp} target='_blank'>
                        <button>
                            <p className='mr-[10px]' href="/projects">App</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link'/>
                        </button>
                    </a>

                    <a href={props.projectCode} target='_blank'>
                        <button>
                            <p className='mr-[10px]' href="/projects">Code</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link'/>
                        </button>
                    </a>

                </div>

                <div className='mx-[10px] font-ubuntu italic my-[30px]'>
                    <p>{props.projectDesc}</p>
                </div>


                <div className='mt-[20px] lg:mx-[300px] font-ubuntu'>
                    <div>{props.projectTech.map((tech, index) => {
                        return (

                            <div key={index} className='mb-[20px] pb-[10px] bg-blue-200'>
                                <p className='flex justify-center items-center font-bebas pt-[5px] bg-blue-300'>{tech.name}</p>
                                <p className='text-center'>{tech.desc}</p>
                            </div>
                        )
                    })}</div>
                </div>

            </div>
        </div>
    );
};

export default ProjectBlock;