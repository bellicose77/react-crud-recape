import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import ShowData from '../ShowData/ShowData';
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
console.log(uservalue)
    return (
        <div>
          <Heading></Heading>
          <UserList handleFormValue={handleFormValue} uservalue={uservalue} setUservalue={setUservalue}></UserList>
          <ShowData uservalue={uservalue}></ShowData>

        </div>
    );
};

export default Home;