import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home' 
import About from './Component/About'
import Labs from './Component/Labs'
import NotFound from './Component/NotFound'
import Support from './Component/Support'
import { Link, NavLink } from 'react-router-dom';
import MainHeader from './Component/MainHeader';


function App() {
  return (
    <div className="App">
    <nav>

      <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/support">Support</NavLink></li>
      <li><NavLink to="/labs">Labs</NavLink></li>
      </ul>

    </nav>
    <Routes>
      <Route path="/" element={<MainHeader/>}>
      {/* Default Route */}
      <Route index element={<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
