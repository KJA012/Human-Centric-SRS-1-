import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>인간 중심 추천 알고리즘</h1>
          <p className="subtitle">AI 시대의 창의성 자동화가 초래하는 디지털 불안과 플랫폼 붕괴를 해결합니다</p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>사용자 선택권 회복</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <span>인간 창작 콘텐츠 보호</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚖️</span>
              <span>플랫폼 양면 시장 건강성</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="slider-demo">
            <div className="slider-label">안티-버블 슬라이더</div>
            <div className="slider-visual">
              <span>AI 중심</span>
              <div className="slider-track">
                <div className="slider-thumb" style={{left: '50%'}}></div>
              </div>
              <span>인간 중심</span>
            </div>
            <p className="slider-description">사용자가 능동적으로 콘텐츠 추천 비율을 조절합니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
