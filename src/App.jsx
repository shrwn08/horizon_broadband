import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import User from './components/User'
import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (event) =>{
    event.preventDefault();
navigate('/user')

 }

  return (
    <div className='App'> 
    <Routes>
    <Route path='/' element={<Home setName={setName} name={name} handleSubmit={handleSubmit}/> }/>
    <Route path='/user' element={<User name={name}/>} />
     </Routes>
    </div>
  )
}

export default App
