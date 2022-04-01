import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = () => {
    return (
       <ListGroup className='mt-4'>
        <ListGroupItem>
            <strong>User name</strong>
            <div>
                <Button className='btn btn-warning'>Edit</Button>
                <Button className='btn btn-danger'>Delete</Button>
            </div>
        </ListGroupItem>
       </ListGroup>
    );
};

export default UserList;