'use client'

import React from 'react';

//Layout is used to handle all the pages inside its directory
//Every page within its directory is run through the layout, this allows us to create logic that will run on every page

const layout = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    );
};

export default layout;