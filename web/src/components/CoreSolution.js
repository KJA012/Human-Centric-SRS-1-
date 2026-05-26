import React from 'react';
import './CoreSolution.css';

function CoreSolution() {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <h2>💡 핵심 솔루션: 안티-버블 슬라이더</h2>
        <p className="section-description">
          사용자가 능동적으로 AI vs 인간 창작 콘텐츠의 비율을 조절할 수 있는 UI 슬라이더
        </p>
        
        <div className="solution-content">
          <div className="solution-text">
            <h3>어떻게 작동하나요?</h3>
            <ul className="features-list">
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>사용자 제어</strong>
                  <p>직관적인 슬라이더로 선호도를 0.0(AI)에서 1.0(인간)까지 조절</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>실시간 반영</strong>
                  <p>선택은 즉시 추천 알고리즘에 반영되어 피드가 업데이트</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>수학적 우대</strong>
                  <p>인간의 불완전한 서사(결핍, 노고)를 공식으로 수학적으로 우대</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>플랫폼 상생</strong>
                  <p>AI와 인간 창작자의 이해관계를 조화시켜 양면 시장 건강성 유지</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="solution-visual">
            <div className="visual-box">
              <h4>슬라이더 범위</h4>
              <div className="slider-range">
                <div className="range-item left">
                  <span className="value">0.0</span>
                  <span className="label">AI 중심</span>
                  <span className="desc">효율적, 고도로 최적화됨</span>
                </div>
                <div className="range-item center">
                  <span className="value">0.5</span>
                  <span className="label">균형</span>
                  <span className="desc">혼합 (기본값)</span>
                </div>
                <div className="range-item right">
                  <span className="value">1.0</span>
                  <span className="label">인간 중심</span>
                  <span className="desc">창의적, 결함 있음</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreSolution;
