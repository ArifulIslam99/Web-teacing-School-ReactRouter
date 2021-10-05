import React from 'react';

const NotFound = () => {
    return ( 
        // Not Found Page. For Wrong Url input the page will redirected.
        <div>
            <h1 className="text-danger">404 Eror</h1>
            <h2>Page You Looking is Not Available!</h2>
        </div>
    );
};

export default NotFound;