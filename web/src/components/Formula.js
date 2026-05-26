import React, { useState } from 'react';
import './Formula.css';

function Formula() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="formula" className="formula">
      <div className="container">
        <h2>📐 권장 점수 계산 공식</h2>
        <p className="section-description">수학적으로 엄밀한 추천 알고리즘 설계</p>
        
        <div className="formula-main">
          <div className="formula-box">
            <div className="formula-header">최종 점수 공식</div>
            <div className="formula-equation">
              <span className="var">최종점수</span>
              <span className="op">=</span>
              <span className="var">우연성점수</span>
              <span className="op">×</span>
              <span className="paren">(1 +</span>
              <span className="var">알파</span>
              <span className="op">×</span>
              <span className="var">인간지수</span>
              <span className="paren">)</span>
            </div>
          </div>
        </div>

        <div className="formula-variables">
          <h3>공식 설명</h3>
          <div className="variables-grid">
            {[
              {
                name: '우연성점수',
                range: '0.0 ~ 1.0',
                desc: '콘텐츠의 기술적 신선도 및 다양성',
                icon: '🎲'
              },
              {
                name: '인간지수',
                range: '0.0 ~ 1.0',
                desc: 'AI 탐지 모델로 계산한 인간 저작 확률',
                icon: '👤'
              },
              {
                name: '알파(가중치)',
                range: '0.5 ~ 1.5',
                desc: '플랫폼 상생 가중치 (사용자 슬라이더 반영)',
                icon: 'α'
              },
              {
                name: '최종점수',
                range: '0.7 ~ 2.0+',
                desc: '추천 알고리즘에 사용되는 최종 순위 점수',
                icon: '⭐'
              }
            ].map((variable, idx) => (
              <div key={idx} className="var-card">
                <div className="var-icon">{variable.icon}</div>
                <h4>{variable.name}</h4>
                <div className="var-range">범위: {variable.range}</div>
                <p>{variable.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="alpha-calculation">
          <h3>알파(가중치) 계산 규칙</h3>
          <div className="calc-box">
            <div className="code-block">
              <div>알파 = 0.5  # 기본값</div>
              <div style={{marginTop: '1rem'}}>만약 (사용자가 안티-버블 슬라이더를 활성화했다면):</div>
              <div style={{marginLeft: '2rem', marginTop: '0.5rem'}}>알파 = 사용자_슬라이더값 × 1.5</div>
            </div>
          </div>

          <div className="alpha-details">
            <button 
              className="expandable-btn"
              onClick={() => toggleExpand('alpha')}
            >
              {expanded.alpha ? '▼' : '▶'} 1.5가 최적값인 이유
            </button>
            {expanded.alpha && (
              <div className="expandable-content">
                <p><strong>문제:</strong> 점수가 너무 높아지는 것을 방지해야 함</p>
                <div className="comparison-table">
                  <div className="table-row header">
                    <div>배수</div>
                    <div>알파범위</div>
                    <div>최종범위</div>
                    <div>기본대비</div>
                    <div>평가</div>
                  </div>
                  <div className="table-row">
                    <div>1.0</div>
                    <div>0.0~1.0</div>
                    <div>0.70~1.26</div>
                    <div>+26%</div>
                    <div>❌ 차이 너무 작음</div>
                  </div>
                  <div className="table-row highlight">
                    <div><strong>1.5</strong></div>
                    <div><strong>0.0~1.5</strong></div>
                    <div><strong>0.70~1.54</strong></div>
                    <div><strong>+57%</strong></div>
                    <div><strong>✅ 최적</strong></div>
                  </div>
                  <div className="table-row">
                    <div>2.0</div>
                    <div>0.0~2.0</div>
                    <div>0.70~1.82</div>
                    <div>+88%</div>
                    <div>⚠️ 차이 큼</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formula;
