import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CrudUsuarios from './components/CrudUsuarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='usuarios' element={<CrudUsuarios />} />
      <Route path='sobre' element={<About />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
