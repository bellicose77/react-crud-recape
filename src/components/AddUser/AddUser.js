import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddUser = () => {
    const [uservalue,setUservalue]=useState({
        username:'',
        email:'',
        password:''
    });
    // const [useremail,setUseremail]=useState('');
    // const[userpass,setUserpass]=useState('');
    const handleFormValue = (e)=>{
        const nameValue=e.target.name;
        const inputValue = e.target.value;
        if(nameValue==='username'){
            setUservalue({...uservalue,username:inputValue})
        }
        
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
                    name="username"
                    onChange={handlename}
                    ></Input>
                    <Label>Add Email</Label>
                    <Input type ="email" 
                    name="email"
                    placeholder='Add email'
                    onChange={handleEmail}
                    ></Input>
                    <Label>Add password</Label>
                    <Input type ="text"
                     placeholder='Add password'
                     name="password"
                     onChange = {handlePassword}
                    ></Input>
                   </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
            </Form>
       
    );
};

export default AddUser;