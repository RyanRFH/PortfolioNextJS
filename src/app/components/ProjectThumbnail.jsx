

import React from 'react';

const ProjectThumbnail = (props) => {
    return (
        <div className='max-w-[800px] mb-[50px]'>
            <a href={props.projLink} className='w-full pr-[5px] flex items-center justify-center'>
                <div className='absolute font-bebas text-3xl z-10 lg:text-[80px] bg-blue-300 p-[30px] lg:p-[60px] rounded-2xl'>
                    <p>{props.projName}</p>
                </div>

                <img src={props.projImg} alt='portfolio-thumbnail' className='opacity-50' />
            </a>
        </div>
    );
};

export default ProjectThumbnail;