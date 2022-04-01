import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const EditUser = () => {
    return (
        <Form>
        <FormGroup>
            <Label>Edit User</Label>
            <Input type ="text" placeholder='Add user'></Input>
           </FormGroup>
        <Button type='submit'>Edit</Button>
        <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
    </Form>
    );
};

export default EditUser;