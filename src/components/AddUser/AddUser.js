import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UserList from '../UserList/UserList';

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
        setUservalue({...uservalue,[nameValue]:inputValue})
        // if(nameValue==='username'){
        //     setUservalue({...uservalue,username:inputValue})
        // }
        // else if(nameValue==='email'){
        //     setUservalue({...uservalue,email:inputValue}) 
        // }
        // else if(nameValue==='password'){
        //     setUservalue({...uservalue,password:nameValue})
        // }
        
    }
   // console.log(uservalue);
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={
            username:uservalue.username,
            email:uservalue.email,
            password:uservalue.password
        }
        console.log(data)
    }
    return (
        <>
      
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Add Name</Label>
                    <Input type ="text"  
                    name="username"
                    value={uservalue.username}
                    onChange={handleFormValue}
                    ></Input>
                    <Label>Add Email</Label>
                    <Input type ="email" 
                    name="email"
                    value={uservalue.email}
                    onChange={handleFormValue}
                    ></Input>
                    <Label>Add password</Label>
                    <Input type ="text"
                     name="password"
                     value={uservalue.password}
                     onChange = {handleFormValue}
                    ></Input>
                   </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to ='/' className='btn btn-danger ml-12' >Cancel</Link>
            </Form>
            <UserList uservalue={uservalue}></UserList>
            </>
       
    );
};

export default AddUser;