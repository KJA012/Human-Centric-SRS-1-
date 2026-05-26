import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import CoreSolution from './components/CoreSolution';
import Formula from './components/Formula';
import Demo from './components/Demo';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Overview />
      <CoreSolution />
      <Formula />
      <Demo />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
