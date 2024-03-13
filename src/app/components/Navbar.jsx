import Link from 'next/link'
import React from 'react';

const Navbar = () => {

    return (
        <div className='grid grid-cols-2 bg-blue-400 h-[100px] font-bebas w-full text-white'>
            <Link href='/' className='flex items-center lg:ml-[40px]'>
                <h1 className='ml-[10px] lg:text-6xl sm:text-3xl text-2xl'>Ryan Foster-Hill</h1>
            </Link>

            <div className='flex items-center justify-evenly text-2xl lg:text-6xl text-blue-600'>
                <Link className='hover:text-blue-200' href='/'>Home</Link>
                <Link className='hover:text-blue-200' href='/projects'>Projects</Link>
            </div>

        </div>


    );
};

export default Navbar;


