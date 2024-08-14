import Link from 'next/link';
import React from 'react';

const page = async () => {

    return (
        <div className="flex flex-col items-center mt-[80px] lg:ml-[100px] mb-[50px]">
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl ml-[20px]">Thank you</h1>
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl ml-[20px]">Message Received</h1>
            <Link href="/">
                <button className='buttonblue w-[200px] text-6xl ml-[20px]'>Home</button>
            </Link>

        </div>
    );
};

export default page;