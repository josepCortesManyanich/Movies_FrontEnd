import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import Movies from './views/Movies';
import Series from './views/Series';
import MoviesDetail from './views/MoviesDetail';



function App() {
  return (
    <div className="App"> 
    
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/peliculas" element={<Movies/>} />
                <Route path="/series" element={<Series/>} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/peliculas/:id" element={<MoviesDetail/>}/>
        </Routes>
       
       
      
    </div>
  );
}

export default App;
