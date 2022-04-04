import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = () => {
    const [uservalue,setUservalue]=useState({
        username:'',
        email:'',
        password:''
    });
    return (
       <ListGroup className='mt-4'>
        <ListGroupItem className='d-flex '>
            <strong></strong>
            <div className='ml-auto'>
                <Link to ='edit/1' className='btn btn-warning mr-1'>Edit</Link>
                <Button className='btn btn-danger'>Delete</Button>
            </div>
        </ListGroupItem>
       </ListGroup>
    );
};

export default UserList;