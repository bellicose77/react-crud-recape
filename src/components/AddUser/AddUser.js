import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddUser = () => {
    return (
      
            <Form>
                <FormGroup>
                    <Label>Add Name</Label>
                    <Input type ="text" placeholder='Add Name'></Input>
                    <Label>Add Email</Label>
                    <Input type ="text" placeholder='Add email'></Input>
                    <Label>Add password</Label>
                    <Input type ="text" placeholder='Add password'></Input>
                   </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
            </Form>
       
    );
};

export default AddUser;