import Link from 'next/link'
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-blue-400 h-[130px] mt-auto'>
            <h1 className='text-6xl ml-[60px]'>Contact Me</h1>
            <div className='grid grid-cols-3 ml-[60px] mt-[20px]'>
                <div className='flex'>
                    <p className='mr-[10px]'>Phone:</p>
                    <a href='tel:07504666904' className='hover:text-white'>07504666904</a>
                </div>
                <div className='flex'>
                <p className='mr-[10px]'>Email:</p>
                    <a href='mailto:rfoster-hill@hotmail.com' className='hover:text-white'>rfoster-hill@hotmail.com</a>
                </div>
                <div className='flex'>
                    <p className='mr-[10px]'>Address:</p>
                    <a target='_blank'
                    href='https://www.google.com/maps/place/Burnley/@53.7916561,-2.3324403,12z/data=!3m1!4b1!4m6!3m5!1s0x487b9042f0923d57:0x4feaa828ce73e4cb!8m2!3d53.7892877!4d-2.2405035!16zL20vMDF0OGd6?entry=ttu'
                    className='hover:text-white'>
                    Burnley, Lancashire 
                    </a>
                </div>

                
            </div>
        </div>


    );
};

export default Navbar;


