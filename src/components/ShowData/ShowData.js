import React from 'react';

const ShowData = ({uservalue}) => { 
    console.log("show",uservalue)
    return (
        <div>
            <p>{uservalue.username}</p>
            <p>{uservalue.email}</p>
            <p>{uservalue.password}</p>
        </div>
    );
};

export default ShowData;