import React, { useEffect } from 'react';
import HeroComingSoon from './Components/HomeHero/heroComingSoon';
import './App.css';
import Header from "./Components/Common/Header";

function App() {
  
  return (
    <div className="App">      
      <Header />  
      <p>Loaded app in browser</p>    
      <HeroComingSoon />
    </div>
  );
}

export default App;
