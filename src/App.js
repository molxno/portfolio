import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Servicio from './pages/servicio';
import Contacto from './pages/contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } exact />
        <Route path='/Servicio' element={ <Servicio/> } exact />
        <Route path='/Contacto' element={ <Contacto/> } exact />
      </Routes>
    </Router>
  );
}

export default App;