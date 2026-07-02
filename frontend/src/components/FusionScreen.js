import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function FusionScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Sensor Fusion & Identification <span style={{ color: theme.accentRed }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: theme.textSub }}>Trigger: processed data available</span>
            <span style={badgeStyle('Error')}>Drone confirmed</span>
          </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={cardStyle}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>RF match score</p><h1 style={{ margin: 0, fontSize: '2.5rem', color: theme.accentBlue }}>91%</h1></div>
        <div style={cardStyle}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>Visual match score</p><h1 style={{ margin: 0, fontSize: '2.5rem', color: theme.accentYellow }}>74%</h1></div>
        <div style={cardStyle}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>Thermal match score</p><h1 style={{ margin: 0, fontSize: '2.5rem', color: theme.accentYellow }}>68%</h1></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...cardStyle, flex: 1 }}>
          <h3 style={{ marginTop: 0 }}>DJI Phantom-class drone</h3>
          <p style={{ color: theme.textSub, marginBottom: '20px' }}>Commercial quadcopter · unregistered</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span>Overall fusion confidence</span><span style={{ color: theme.accentGreen }}>86%</span></div>
          <div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px', marginBottom: '20px' }}><div style={{ height: '100%', width: '86%', backgroundColor: theme.accentGreen, borderRadius: '3px' }}></div></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Cross-reference sensor data</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Correlate RF signature</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>3. Match visual profile</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>4. Validate against database</span><span style={badgeStyle('Error')}>Confirmed</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>5. Log identification result</span><span style={badgeStyle('Done')}>Done</span></div>
          </div>
        </div>

        <div style={{ ...cardStyle, flex: 1 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Detection Results</h3>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: theme.textSub, borderBottom: `1px solid ${theme.border}` }}>
                <th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Target ID</th><th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Type</th><th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Confidence</th><th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>TGT-001</td><td>DJI Phantom</td><td>86%</td><td><span style={badgeStyle('Error')}>Drone</span></td></tr>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>TGT-002</td><td>Mavic</td><td>74%</td><td><span style={badgeStyle('Error')}>Drone</span></td></tr>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>TGT-003</td><td>Bird</td><td>92%</td><td><span style={badgeStyle('Done')}>Rejected</span></td></tr>
            </tbody>
          </table>
          <p style={{ color: theme.textSub, fontSize: '0.9rem', marginTop: '20px' }}>Note: AC1 partial sensor fallback — thermal data used for TGT-002 correlation</p>
        </div>
      </div>
    </div>
  );
}