import React from 'react';
import './Overview.css';

function Overview() {
  const problems = [
    {
      icon: '🚨',
      title: '디지털 불안감',
      description: 'AI 콘텐츠만 노출되는 버블 현상으로 인한 사용자의 심리적 불안'
    },
    {
      icon: '📉',
      title: '플랫폼 붕괴',
      description: '인간 창작자의 도태로 인한 양면 시장의 건강성 악화'
    },
    {
      icon: '🔒',
      title: '선택권 박탈',
      description: '알고리즘의 일방적 결정으로 인한 사용자 자유도 상실'
    }
  ];

  return (
    <section id="overview" className="overview">
      <div className="container">
        <h2>🎯 프로젝트 개요</h2>
        <p className="section-description">
          "다빈치가 된 알고리즘" 시대에 창의성 자동화로 인한 문제들을 해결합니다
        </p>
        
        <div className="problems-grid">
          {problems.map((problem, idx) => (
            <div key={idx} className="problem-card">
              <div className="icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
