import React from 'react';
import Home from './Page/home/Home'
import LoginPage from './Page/login/Login';
import RegisterPage from './Page/register/Register'
import Profile from './Page/Profile/Profile';
import { Routes, Route } from "react-router-dom"
import NavbarComponent from './Component/Navbar/Navbar'
import SidebarComponent from './Component/Sidebar/Sidebar';
import { useWindowSize } from 'react-use';


function App({ Component }) {
  const {width, height} = useWindowSize()

  return (
    <div className='App'>
      <NavbarComponent />
      <SidebarComponent/>
      <div style={{ 
                    position:'absolute',
                    zIndex:0,
                    marginLeft: width / 2.2}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profil/:id" element={<Profile />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
