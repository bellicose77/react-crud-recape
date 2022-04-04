import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import ShowData from './components/ShowData/ShowData';

function App() {
  return (
    <div style={{maxWidth: '30rem', margin:'4rem auto'}}>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path="adduser" element={<AddUser/>}/>
        <Route path='/show' element={<ShowData/>} />
        <Route path='edit/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
