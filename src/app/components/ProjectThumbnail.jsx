import Link from 'next/link';
import React from 'react';

const ProjectThumbnail = (props) => {
    return (
        <Link href={props.projLink} className='w-full flex flex-col items-center justify-center hover:opacity-60'>

            <p className='flex leading-[60px] text-center items-center justify-center font-bebas text-3xl lg:text-[60px] w-full min-h-[100px] lg:rounded-t-3xl text-white bg-blue-400'>{props.projName}</p>

            <div className='flex flex-col items-center justify-center max-w-[800px] md:min-h-[500px] mb-[30px] md:mb-[50px] py-[20px] md:px-[30px] md:rounded-b-3xl bg-blue-200 lg:min-w-[800px] lg:min-h-[500px]'>

                <img className='max-h-[400px] rounded-3xl' src={props.projImg} alt='portfolio-thumbnail' />

                <p className='mx-[10px] font-ubuntu font-bold mt-[10px]'>{props.projDesc}</p>

            </div>
        </Link>

    );
};

export default ProjectThumbnail;