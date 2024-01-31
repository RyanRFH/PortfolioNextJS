import React from 'react';

const ProjectThumbnail = (props) => {
    return (
        <div className='flex flex-col items-center justify-center max-w-[800px] md:min-h-[500px] mb-[30px] md:mb-[50px] py-[20px] md:px-[30px] md:rounded-3xl bg-blue-200 lg:min-w-[800px]'>
            <div>
                <a href={props.projLink} className='w-full flex items-center justify-center hover:opacity-60'>
                    <div className='absolute font-bebas text-3xl z-10 lg:text-[60px] bg-blue-600 py-[10px] px-[20px] lg:p-[30px] rounded-2xl'>
                        <p className='text-white'>{props.projName}</p>
                    </div>

                    <img className='max-h-[400px] rounded-3xl' src={props.projImg} alt='portfolio-thumbnail'/>
                </a>
            </div>
            <p className='mx-[10px] font-ubuntu font-bold mt-[10px]'>{props.projDesc}</p>
        </div>

    );
};

export default ProjectThumbnail;