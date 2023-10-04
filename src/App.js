
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { useState } from 'react';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';


function App() {
  const { token, setToken } = useToken();
  // const token = getToken();

  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
  
          <Route exact path="/preferences" element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
