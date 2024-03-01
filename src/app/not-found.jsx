import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[300px]'>
            <h1 className='text-6xl font-bebas'>Page not found</h1>
            <Link href='/'>
                <button className='buttonblue w-[200px] h-[30px]'>
                    Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;