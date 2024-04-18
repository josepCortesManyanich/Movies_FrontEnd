import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';
import Login from './views/auth/Login';
import Movies from './views/Movies';
import Series from './views/Series';
import MoviesDetail from './views/MoviesDetail';
import SeriesDetail from './views/SeriesDetail';
import Signup from './views/auth/Signup';
import Profile from './views/user/Profile';




function App() {
  return (
    <div> 
      <Profile/>
    </div>
  );
}

export default App;
