import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Demo.css';

function Demo() {
  const [sliderValue, setSliderValue] = useState(0.5);
  const [sliderActive, setSliderActive] = useState(true);

  const calculateScore = (serendipityScore, humanIndex, sliderVal, active) => {
    let alpha = 0.5;
    if (active) {
      alpha = sliderVal * 1.5;
    }
    return (serendipityScore * (1 + alpha * humanIndex)).toFixed(4);
  };

  const demoData = [
    {
      name: '콘텐츠 A',
      serendipity: 0.7,
      humanIndex: 0.8,
      type: '인간 창작'
    },
    {
      name: '콘텐츠 B',
      serendipity: 0.8,
      humanIndex: 0.2,
      type: 'AI 생성'
    },
    {
      name: '콘텐츠 C',
      serendipity: 0.75,
      humanIndex: 0.6,
      type: '하이브리드'
    }
  ];

  const chartData = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 100; i++) {
      const val = i / 100;
      points.push({
        slider: val.toFixed(2),
        'AI 콘텐츠': (0.7 * (1 + (val * 1.5) * 0.2)).toFixed(2),
        '인간 창작': (0.7 * (1 + (val * 1.5) * 0.8)).toFixed(2),
        '하이브리드': (0.75 * (1 + (val * 1.5) * 0.6)).toFixed(2)
      });
    }
    return points;
  }, []);

  const currentScores = demoData.map(content => ({
    ...content,
    score: calculateScore(content.serendipity, content.humanIndex, sliderValue, sliderActive)
  })).sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

  return (
    <section id="demo" className="demo">
      <div className="container">
        <h2>🎮 인터랙티브 데모</h2>
        <p className="section-description">슬라이더를 조절하여 점수 변화를 직접 확인해보세요</p>
        
        <div className="demo-content">
          <div className="controls">
            <div className="control-group">
              <label className="control-label">
                <input 
                  type="checkbox" 
                  checked={sliderActive}
                  onChange={(e) => setSliderActive(e.target.checked)}
                />
                {sliderActive ? '슬라이더 활성화' : '슬라이더 비활성화'}
              </label>
            </div>

            <div className="control-group">
              <label>슬라이더 값: <strong>{sliderValue.toFixed(2)}</strong></label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseFloat(e.target.value))}
                className="slider-input"
                disabled={!sliderActive}
              />
              <div className="slider-labels">
                <span>0.0 (AI중심)</span>
                <span>0.5 (균형)</span>
                <span>1.0 (인간중심)</span>
              </div>
            </div>

            <div className="alpha-display">
              <h4>알파 계산</h4>
              <div className="alpha-calc">
                <div className="calc-line">
                  기본값 알파: <strong>0.5</strong>
                </div>
                {sliderActive && (
                  <>
                    <div className="calc-line">
                      계산: {sliderValue.toFixed(2)} × 1.5 = <strong>{(sliderValue * 1.5).toFixed(4)}</strong>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="scores-display">
            <h3>실시간 점수</h3>
            <div className="scores-list">
              {currentScores.map((content, idx) => (
                <div key={idx} className="score-item">
                  <div className="score-rank">#{idx + 1}</div>
                  <div className="score-info">
                    <div className="score-name">{content.name}</div>
                    <div className="score-type">{content.type}</div>
                  </div>
                  <div className="score-value">
                    <span className="value">{content.score}</span>
                    <span className="human-index">(인간지수: {(content.humanIndex * 100).toFixed(0)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3>슬라이더 값에 따른 점수 변화 그래프</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="slider" 
                label={{ value: '슬라이더 값', position: 'insideBottomRight', offset: -5 }}
              />
              <YAxis 
                label={{ value: '최종 점수', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="AI 콘텐츠" stroke="#ff6b6b" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="인간 창작" stroke="#51cf66" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="하이브리드" stroke="#6366f1" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Demo;
