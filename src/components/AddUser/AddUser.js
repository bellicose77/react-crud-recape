import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddUser = () => {
    const [username,setUsername]=useState('');
    const [useremail,setUseremail]=useState('');
    const[userpass,setUserpass]=useState('');
    const handlename = (e)=>{
        const inputValue = e.target.value;
        setUsername(inputValue);
    }
    const handleEmail = (e)=>{
        const inputValue = e.target.value;
        setUseremail(inputValue);
    }
    const handlePassword = (e)=>{
        const inputValue = e.target.value;
        setUserpass(inputValue)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={
            name:username,
            email:useremail,
            pass:userpass
        }
        console.log(data)
    }
    return (
      
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Add Name</Label>
                    <Input type ="text" 
                    placeholder='Add Name' 
                    onChange={handlename}
                    ></Input>
                    <Label>Add Email</Label>
                    <Input type ="email" 
                    placeholder='Add email'
                    onChange={handleEmail}
                    ></Input>
                    <Label>Add password</Label>
                    <Input type ="text"
                     placeholder='Add password'
                     onChange = {handlePassword}
                    ></Input>
                   </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
            </Form>
       
    );
};

export default AddUser;