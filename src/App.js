import logo from './logo.svg';
 import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import SideNav from './SideNav';
import Footer from './features/Footer';
import Home from './features/Home' ;
import Experience from './features/Experience';
import Projects from './features/Projects';

function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <SideNav></SideNav>
      
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/experience" element={<Experience />}></Route>
      
    </Routes>
    <Footer/>

    
      
      
    </div>
  );
}

export default App;
