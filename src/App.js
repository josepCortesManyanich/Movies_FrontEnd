import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';
import Login from './views/auth/Login';
import Movies from './views/Movies';
import Series from './views/Series';
import Signup from './views/auth/Signup';
import Profile from './views/user/Profile';




function App() {
  return (
    <div> 
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/peliculas" element={<Movies/>} />
                <Route path="/series" element={<Series/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/perfil" element={<Profile/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
