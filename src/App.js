import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import SchedulePage from './pages/SchedulePage.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <SchedulePage/>
    </div>
  );
}

export default App;
