import React from 'react';

const Status = ({serviceStatus, errorMessage}) => (

    <div className={serviceStatus && !errorMessage ? 'success' : 'error'}>
       {serviceStatus && !errorMessage ? (
            <span></span> //Everything ok
            ) : <strong>{errorMessage}</strong>
    }
    </div>
);

export default Status