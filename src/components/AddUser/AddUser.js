import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddUser = () => {
    return (
      
            <Form>
                <FormGroup>
                    <Label>Add User</Label>
                    <Input type ="text" placeholder='Add user'></Input>
                   </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
            </Form>
       
    );
};

export default AddUser;