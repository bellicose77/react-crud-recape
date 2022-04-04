import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import AddUser from '../AddUser/AddUser';

const UserList = ({handleFormValue,uservalue,setUservalue}) => {
   
    return (
        <>
       <ListGroup className='mt-4'>
        <ListGroupItem className='d-flex '>
            <AddUser handleFormValue={handleFormValue} uservalue={uservalue} setUservalue={setUservalue}></AddUser>
            <div className='ml-auto'>
                {/* <Link to ='edit/1' className='btn btn-warning mr-1'>Edit</Link>
                <Button className='btn btn-danger'>Delete</Button> */}
            </div>
        </ListGroupItem>
       </ListGroup>
       </>
    );
};

export default UserList;