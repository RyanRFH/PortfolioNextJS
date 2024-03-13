'use client'

import React, { useEffect } from 'react';

//Layout is used to handle all the pages inside its directory
//Every page within its directory is run through the layout, this allows us to create logic that will run on every page

const layout = ({ children }) => {

    // useEffect(() => {
    //     const cookieStore = cookies();
    //     console.log(cookieStore)
    //     getUser();
    // }, []);

    return (
        <div>
            {children}
        </div>
    );
};

// async function getUser() {
//     //Next object argument sets data revalidation time in seconds
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth`, {
//             method: "GET",
//             next: {
//                 revalidate: 0 //Using 0 opts our of using cache
//             }
//         })

//         const data = await res.json()
//         return data
//     } catch (error) {
//         const errorMessage = "error in getUser()"
//         console.log(errorMessage)
//         return { error: errorMessage }
//     }

// }

export default layout;