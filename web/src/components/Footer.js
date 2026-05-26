import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Human-Centric SRS</h4>
            <p>AI 시대의 인간 중심 추천 시스템</p>
          </div>
          
          <div className="footer-section">
            <h4>빠른 링크</h4>
            <ul>
              <li><a href="#overview">개요</a></li>
              <li><a href="#solution">솔루션</a></li>
              <li><a href="#formula">공식</a></li>
              <li><a href="#demo">데모</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>GitHub</h4>
            <ul>
              <li>
                <a href="https://github.com/KJA012/Human-Centric-SRS-1-" target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/KJA012" target="_blank" rel="noopener noreferrer">
                  Developer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Human-Centric SRS. Created with React. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
