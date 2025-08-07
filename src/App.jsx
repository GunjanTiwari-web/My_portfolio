import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'; // ✅ Correct path
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <>
      <Navbar />
    <div className="container">
<Hero />
<Skills/>
    </div>
    </>
  );
};

export default App;
