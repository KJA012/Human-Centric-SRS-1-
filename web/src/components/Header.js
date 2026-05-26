import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">Human-Centric SRS</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('overview')}>개요</button>
          <button onClick={() => scrollToSection('solution')}>솔루션</button>
          <button onClick={() => scrollToSection('formula')}>공식</button>
          <button onClick={() => scrollToSection('demo')}>데모</button>
          <a href="https://github.com/KJA012/Human-Centric-SRS-1-" target="_blank" rel="noopener noreferrer" className="github-btn">
            GitHub
          </a>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
