import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import PrivateView from './views/PrivateView';
import IsPrivate from './components/IsPrivate';

function Routes() {
  return (
    <div>
        <Toaster>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/private" element={<IsPrivate><PrivateView/></IsPrivate>}/>
                <Route path="*" element={<ErrorPage />} />
                
            </Routes>
        </Toaster>
    </div>
  )
}

export default Routes
