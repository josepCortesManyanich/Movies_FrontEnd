import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Movies from './views/Movies';
import Series from './views/Series';


function App() {
  return (
    <div className="App">
      
    <Navbar/>
      
      <Movies/>
    </div>
  );
}

export default App;
