import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Logo from './assets/Logo';
import Users from './assets/Routes/Users';
import Userinfo from './assets/Routes/Userinfo';

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <div className='container text-gray-200 py-3'>
        <Logo />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:username' element={<Userinfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
