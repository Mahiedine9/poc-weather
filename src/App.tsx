import React from 'react';
import './App.css';
import Header from './view/Header';
import Weather from './view/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Weather/>
      </main>
    </div>
  );
}

export default App;
