import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LogIn/Login'
import Register from './components/Register/Register'
import QandA from './components/QandA/QandA';
import Graph from './components/Graph'
import PsyDashboard from './components/PsychologistDashboard'
import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/QandA' element={<QandA />}></Route>
          <Route path='/graph' element={<Graph/>}></Route>
          <Route path='/psydashboard' elelment={<PsyDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
