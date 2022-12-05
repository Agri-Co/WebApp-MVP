import React from 'react';
import Home from './page/home/Home'
import LoginPage from './page/login/Login';
import RegisterPage from './page/register/Register'
import Profile from './page/Profile/Profile';
import { Routes, Route } from "react-router-dom"
import NavbarComponent from './page/Navbar/Navbar'


function App({ Component }) {
  return (
    <div className='App'>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profil/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
