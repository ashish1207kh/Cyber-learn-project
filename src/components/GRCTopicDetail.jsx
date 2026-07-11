import React from 'react';
import Header from './Header';

export default function GRCTopicDetail({ topicId = '01', onBack, onNavigate }) {
  // We will build this out fully when the user provides the detailed content for GRC topics.
  return (
    <div className="defensive-dashboard-wrapper select-none">
      <Header view="grc" onBack={onBack} />
      <div className="dashboard-main-wrapper topic-main-layout" style={{ marginTop: '80px', padding: '0 40px' }}>
        <button 
          className="btn-scenario-nav" 
          onClick={onBack}
          style={{ marginBottom: '30px', background: 'transparent', color: '#22c55e', border: '1px solid #22c55e', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
        >
          &lt; Back to GRC Topics
        </button>
        
        <h2 style={{ color: '#22c55e', textTransform: 'uppercase' }}>GRC Topic: {topicId}</h2>
        <p style={{ color: '#cbd5e1', marginTop: '20px' }}>
          This section is currently a placeholder. The detailed content for GRC Topic {topicId} will be populated here shortly!
        </p>
      </div>
    </div>
  );
}
