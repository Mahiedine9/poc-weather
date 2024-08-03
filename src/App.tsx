import React from 'react';
import './App.css';
import Header from './view/Header';
import Weather from './view/Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './view/Contacts';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
      <Routes>
            <Route path='/contacts' element={<Contacts />} />
            <Route path="/" element={<Weather />} />
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
