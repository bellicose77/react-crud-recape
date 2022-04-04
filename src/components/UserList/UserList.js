import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = ({username,email,password}) => {
    return (
       <ListGroup className='mt-4'>
        <ListGroupItem className='d-flex '>
            <strong>{username}</strong>
            <div className='ml-auto'>
                <Link to ='edit/1' className='btn btn-warning mr-1'>Edit</Link>
                <Button className='btn btn-danger'>Delete</Button>
            </div>
        </ListGroupItem>
       </ListGroup>
    );
};

export default UserList;