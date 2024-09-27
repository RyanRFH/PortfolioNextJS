'use client' //Component must be a client component for Material-tailwind addon to work

//Block for displaying projects on project page
import { Carousel, IconButton } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const ProjectBlock = (props) => {
    let prevProjButton = 'flex'
    let nextProjButton = 'flex'

    if (props.projectId == 1) {
        prevProjButton = 'hidden'
    }
    if (props.projectId == props.projectCount) {
        nextProjButton = 'hidden'
    }

    return (
        <div className='w-full mt-[10px] mb-[50px]'>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='absolute left-0'>
                        <Link href="/projects">
                            <button className='buttonblue hidden mb-[20px] w-[170px] h-[50px] ml-[10px] text-3xl xl:block 2xl:ml-[80px]'>← Projects</button>
                            <button className='buttonblue flex items-center justify-center text-2xl w-[40px] h-[30px] ml-[5px] lg:w-[70px] lg:h-[40px] xl:hidden xl:min-w-[300px] xl:mx-[50px] '>←</button>
                        </Link>
                    </div>
                    <h1 className='font-bebas text-4xl mx-[50px] md:text-5xl lg:text-6xl bg-yellow-200 p-[10px] lg:p-[20px] rounded-lg text-center '>{props.projectName}</h1>
                </div>

                <div className='flex items-center justify-center mt-[20px]'>
                    <Carousel
                        className='max-w-[1200px]'
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="black"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </IconButton>
                        )}

                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="black"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                        )}
                    >

                        {props.projectImages.map((image, index) => {
                            return (
                                <img className='rounded-3xl m-auto' key={index} src={image.url} alt={image.alt} />
                            )
                        })}
                    </Carousel>
                </div>

                <div className='flex justify-around mb-[10px] lg:mx-[300px]'>
                    <Link href={props.projectApp} target='_blank'>
                        <button className='buttonblue min-w-[120px] flex items-center justify-center mt-[10px] text-3xl h-[50px] lg:w-[200px]'>
                            <p className='mr-[10px]' href="/projects">App</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link' />
                        </button>
                    </Link>

                    <Link href={props.projectCode} target='_blank'>
                        <button className='buttonblue min-w-[120px] flex items-center justify-center mt-[10px] text-3xl h-[50px] lg:w-[200px]'>
                            <p className='mr-[10px]' href="/projects">Code</p>
                            <img className='w-[30px]' src='../external-link.svg' alt='link' />
                        </button>
                    </Link>

                </div>

                <div className='flex items-center justify-center mx-[10px] font-ubuntu font-bold my-[30px] text-xl lg:text-3xl bg-blue-200 rounded-xl p-[10px] lg:mx-[50px] lg:p-[50px]'>
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

                <div className='flex'>
                    <div className={`${prevProjButton} justify-center xl:justify-start`}>
                        <Link href={`/projects/${Number(props.projectId) - 1}`}>
                            <button className="buttonblue text-lg w-[170px] h-[50px] mb-[20px] mx-[5px] px-[20px] mt-[20px] sm:w-[250px] sm:text-2xl md:w-[300px] md:text-3xl lg:text-4xl xl:w-[400px] xl:h-[100px] xl:text-5xl xl:mx-[50px]">← Previous Project</button>
                        </Link>
                    </div>

                    <div className={`${nextProjButton} justify-center ml-auto`}>
                        <Link href={`/projects/${Number(props.projectId) + 1}`}>
                            <button className="buttonblue text-lg w-[170px] h-[50px] mb-[20px] mx-[5px] px-[20px] mt-[20px] sm:w-[250px] sm:text-2xl md:w-[300px] md:text-3xl lg:text-4xl xl:w-[400px] xl:h-[100px] xl:text-5xl xl:mx-[50px]">Next Project →</button>
                        </Link>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Link href="/projects">
                        <button className="buttonblue w-[300px] p-[10px] mt-[20px] text-3xl md:w-[500px] md:text-5xl">← Projects</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProjectBlock;