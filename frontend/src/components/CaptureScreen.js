import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';
import mockData from '../mockData.json';

export default function CaptureScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Sensor Capture Console <span style={{ color: theme.accentGreen }}>•</span></h2>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>{mockData.metrics.rfEmissions}</h1><p style={{ margin: 0, color: theme.textSub }}>RF emissions</p></div>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>{mockData.metrics.opticalFrames}</h1><p style={{ margin: 0, color: theme.textSub }}>Optical frames</p></div>
        <div style={cardStyle}><h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>{mockData.metrics.thermalFrames}</h1><p style={{ margin: 0, color: theme.textSub }}>Thermal frames</p></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...cardStyle, flex: 1 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Sensor Status</h3>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: theme.textSub, borderBottom: `1px solid ${theme.border}` }}>
                <th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Sensor ID</th>
                <th style={{ paddingBottom: '10px', fontWeight: 'normal' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {['RF-01', 'RF-02'].map(id => (
                <tr key={id} style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>{id}</td><td><span style={badgeStyle('Active')}>Active</span></td></tr>
              ))}
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>CAM-01</td><td><span style={badgeStyle('Degraded')}>Degraded</span></td></tr>
              {['CAM-02', 'IR-01', 'IR-02'].map(id => (
                <tr key={id} style={{ borderBottom: `1px solid ${theme.border}` }}><td style={{ padding: '15px 0' }}>{id}</td><td><span style={badgeStyle('Active')}>Active</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ ...cardStyle, flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Buffer Status</h3>
            <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}><span>RF data buffer</span><span>72%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px', marginTop: '8px', overflow: 'hidden', position: 'relative' }}><div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '72%', backgroundColor: theme.accentBlue, borderRadius: '3px' }}></div></div></div>
            <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}><span>Optical buffer</span><span>88%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px', marginTop: '8px', overflow: 'hidden', position: 'relative' }}><div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '88%', backgroundColor: theme.accentYellow, borderRadius: '3px' }}></div></div></div>
            <div><div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}><span>Thermal buffer</span><span>45%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px', marginTop: '8px', overflow: 'hidden', position: 'relative' }}><div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '45%', backgroundColor: theme.accentGreen, borderRadius: '3px' }}></div></div></div>
          </div>
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Exception Log</h3>
            <div style={{ fontSize: '0.9rem', color: theme.textSub, display: 'flex', gap: '15px', marginBottom: '10px' }}><span>14:23:08</span><span>CAM-01 reported signal degradation</span></div>
            <div style={{ fontSize: '0.9rem', color: theme.textSub, display: 'flex', gap: '15px' }}><span>14:22:51</span><span>Thermal sensor calibration complete</span></div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(245, 166, 35, 0.05)', border: `1px solid rgba(245, 166, 35, 0.3)`, padding: '20px', borderRadius: '8px', color: theme.accentYellow }}>
        <strong>AC1 active:</strong> Optical visibility poor — thermal feed promoted to primary source
      </div>
    </div>
  );
}