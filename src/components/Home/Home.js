import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import UserList from '../UserList/UserList';

const Home = () => {
  const [uservalue,setUservalue]=useState({
    username:'',
    email:'',
    password:''
});
const handleFormValue = (e)=>{
    const nameValue=e.target.name;
    const inputValue = e.target.value;
    setUservalue({...uservalue,[nameValue]:inputValue})
}
    return (
        <div>
          <Heading></Heading>
          <UserList></UserList>
        </div>
    );
};

export default Home;