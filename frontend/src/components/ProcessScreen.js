import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function ProcessScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Processing Engine <span style={{ color: theme.accentGreen }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: theme.textSub }}>Trigger: new sensor data available</span>
            <span style={badgeStyle('Done')}>Processing</span>
          </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>48</h1><p style={{ margin: 0, color: theme.textSub }}>RF spectrograms</p></div>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>360</h1><p style={{ margin: 0, color: theme.textSub }}>Optical frames</p></div>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>180</h1><p style={{ margin: 0, color: theme.textSub }}>Thermal frames</p></div>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem', color: theme.accentRed }}>3</h1><p style={{ margin: 0, color: theme.textSub }}>Corrupted packets</p></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...cardStyle, flex: 1 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Processing Pipeline Stages</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Ingest raw sensor data</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Normalize & calibrate</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>3. Filter noise & artifacts</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>4. Generate spectrograms</span><span style={badgeStyle('Running')}>Running</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>5. Export to fusion module</span><span style={badgeStyle('Pending')}>Pending</span></div>
          </div>
        </div>

        <div style={{ ...cardStyle, flex: 1.5 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Output Preview — RF Spectrogram</h3>
          <div style={{ width: '100%', height: '150px', borderRadius: '8px', background: 'linear-gradient(90deg, #5C7CFA 0%, #4CAF50 50%, #F5A623 80%, #E53935 100%)', marginBottom: '20px' }}></div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>Exception Log</h4>
          <div style={{ fontSize: '0.9rem', color: theme.textSub, display: 'flex', gap: '15px' }}><span>12:00:04</span><span>3 corrupted packets discarded</span></div>
        </div>
      </div>
    </div>
  );
}