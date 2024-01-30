'use client' //Component must be a client component for Material-tailwind addon to work

//Block for displaying projects on project page
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';



const ProjectBlock = (props) => {
    return (

        <div className='w-full mt-[10px] mb-[50px]'>
            <div>
                <div className='flex items-center justify-center'>
                    <h1 className='font-bebas text-4xl md:text-5xl lg:text-6xl bg-yellow-200 p-[10px] lg:p-[20px] rounded-lg'>{props.projectName}</h1>
                </div>
                <div className='flex items-center justify-center mt-[20px]'>
                    <Carousel className='max-w-[1200px]'>
                        {props.projectImages.map((image, index) => {
                            return (
                                <img className='' key={index} src={image.url} alt={image.alt} />
                            )
                        })}
                    </Carousel>
                </div>


                <div className='flex justify-around mb-[10px] lg:px-[300px]'>
                    <a href={props.projectApp} target='_blank'>
                        <button>
                            <p className='mr-[10px]' href="/projects">App</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link' />
                        </button>
                    </a>

                    <a href={props.projectCode} target='_blank'>
                        <button>
                            <p className='mr-[10px]' href="/projects">Code</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link' />
                        </button>
                    </a>

                </div>

                <div className='flex items-center justify-center mx-[10px] font-ubuntu font-bold my-[30px] text-xl lg:text-3xl bg-blue-200 rounded-xl p-[10px] lg:mx-[150px] lg:p-[50px]'>
                    <p>{props.projectDesc}</p>
                </div>
                <div className='xl:mx-[50px] bg-blue-500 pb-[50px] rounded-3xl'>
                    <div className='flex items-center justify-center py-[30px]'>
                        <h1 className='text-5xl font-bebas text-white'>TECH USED</h1>
                    </div>

                    <div className='font-ubuntu'>
                        <div>{props.projectTech.map((tech, index) => {
                            return (

                                <div key={index} className='mb-[20px] pb-[10px] bg-blue-200 mx-[10px] xl:mx-[100px] rounded-3xl'>
                                    <p className='flex justify-center items-center font-bebas py-[10px] bg-blue-300 text-3xl text-blue-700 rounded-t-3xl'>{tech.name}</p>
                                    <p className='text-center px-[20px] py-[20px] text-xl lg:text-2xl'>{tech.desc}</p>
                                </div>
                            )
                        })}</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProjectBlock;