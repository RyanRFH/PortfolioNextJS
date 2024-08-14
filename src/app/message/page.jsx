import React from 'react';

const page = async () => {

    return (
        <div className="mt-[80px] lg:ml-[100px] mb-[50px]">
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl ml-[20px]">Message</h1>
            <div className='flex justify-center'>
                <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col w-1/2'>
                    <input type="hidden" name="access_key" value={process.env.WEBFORM_KEY} />
                    <p>Name</p>
                    <input type="text" name="name" required />
                    <p className='mt-[10px]'>Email Address</p>
                    <input type="email" name="email" required />
                    <p className='mt-[10px]'>Message</p>
                    <textarea name="message" required></textarea>
                    <input type="hidden" name="redirect" value="https://ryanfoster-hill-portfolio.vercel.app/messagereceived" />
                    <button className='buttonblue mt-[10px] h-[40px] text-2xl' type="submit">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default page;