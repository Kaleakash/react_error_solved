import React from 'react';
import './App.css';

import VerificationPage from './componenets/verificationpage';
import HomePage from './componenets/home';
import Login from './componenets/login';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from '@material-ui/icons';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<VerificationPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;