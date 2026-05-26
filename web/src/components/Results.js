import React from 'react';
import './Results.css';

function Results() {
  return (
    <section className="results">
      <div className="container">
        <h2>📊 결과 분석</h2>
        
        <div className="results-grid">
          <div className="results-box">
            <h3>슬라이더에 따른 점수 변화</h3>
            <div className="results-table">
              <div className="table-header">
                <div>슬라이더값</div>
                <div>알파</div>
                <div>최종점수</div>
                <div>변화율</div>
              </div>
              <div className="table-rows">
                {[
                  { slider: '0.0 (OFF)', alpha: '0.50', score: '0.98', change: '기준점' },
                  { slider: '0.0 (ON)', alpha: '0.00', score: '0.70', change: '-28.6%' },
                  { slider: '0.5 (ON)', alpha: '0.75', score: '1.12', change: '+14.3%' },
                  { slider: '1.0 (ON)', alpha: '1.50', score: '1.54', change: '+57.1%' }
                ].map((row, idx) => (
                  <div key={idx} className="table-row">
                    <div>{row.slider}</div>
                    <div><strong>{row.alpha}</strong></div>
                    <div><strong>{row.score}</strong></div>
                    <div className={row.change === '기준점' ? '' : row.change.includes('-') ? 'negative' : 'positive'}>
                      {row.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="results-box">
            <h3>💼 비즈니스 임팩트</h3>
            <div className="impact-comparison">
              <div className="impact-section before">
                <h4>❌ Before (현재)</h4>
                <ul>
                  <li>사용자: AI 콘텐츠에 갇혀 있음</li>
                  <li>창작자: 인간은 도태됨</li>
                  <li>플랫폼: 신뢰도 하락</li>
                </ul>
              </div>
              <div className="arrow">⟹</div>
              <div className="impact-section after">
                <h4>✅ After (이 솔루션 적용)</h4>
                <ul>
                  <li>사용자: 선택권 회복 (슬라이더 제어)</li>
                  <li>창작자: 인간 창작 콘텐츠 생존 가능</li>
                  <li>플랫폼: 양면 시장 건강성 유지</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-application">
          <h3>🎯 실제 플랫폼 적용</h3>
          <div className="scenarios">
            {[
              {
                title: '사용자 A (슬라이더 1.0)',
                score: '1.54',
                exposure: '상위 노출',
                result: '인간 창작자 콘텐츠 우선 추천',
                color: '#51cf66'
              },
              {
                title: '사용자 B (슬라이더 0.0)',
                score: '0.70',
                exposure: '하위 노출',
                result: 'AI 효율적 콘텐츠 우선 추천',
                color: '#ff6b6b'
              },
              {
                title: '사용자 C (슬라이더 OFF)',
                score: '0.98',
                exposure: '중간 노출',
                result: '균형잡힌 피드',
                color: '#6366f1'
              }
            ].map((scenario, idx) => (
              <div key={idx} className="scenario" style={{borderLeftColor: scenario.color}}>
                <h4>{scenario.title}</h4>
                <div className="scenario-details">
                  <div className="detail-item">
                    <span className="label">최종점수:</span>
                    <span className="value" style={{color: scenario.color}}>{scenario.score}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">노출:</span>
                    <span className="value">{scenario.exposure}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">결과:</span>
                    <span className="value">{scenario.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
