import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path="adduser" element={<AddUser/>}/>
        <Route path=':id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
