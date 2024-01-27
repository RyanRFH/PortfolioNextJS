import Link from 'next/link'
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-blue-400 grid grid-cols-2 h-[100px]'>
            <Link href='/' className='flex items-center'>
                <h1 className='text-6xl ml-[60px]'>Ryan Foster-Hill</h1>
            </Link>

            <div className='flex items-center justify-evenly text-5xl'>
                <Link className='hover:text-white' href='/'>Home</Link>
                <Link className='hover:text-white' href='/projects'>Projects</Link>
            </div>
        </div>


    );
};

export default Navbar;


