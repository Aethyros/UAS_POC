import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function ResponseScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Response Execution Console <span style={{ color: theme.accentRed }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><span style={{ color: theme.textSub }}>Maj. Sharma · L3</span><span style={badgeStyle('Error')}>Threat confirmed</span></div>
      </div>

      <div style={{ ...cardStyle, borderLeft: `4px solid ${theme.accentRed}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}><h3 style={{ margin: 0 }}>RESPONSE-001 · TGT-001 — Tier 1 Critical</h3><span style={badgeStyle('Error')}>Active</span></div>
        <p style={{ color: theme.textSub, marginBottom: '20px' }}>Unregistered DJI Phantom-class drone detected on hostile trajectory toward HQ. Distance 380m, velocity 28m/s. Proximity to protected zone critical (92%). Immediate countermeasure authorization required.</p>
        
        <div style={{ backgroundColor: '#101623', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', color: theme.textSub, letterSpacing: '1px' }}>RESPONSE PROCESS</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Await operator authorization</span><span style={badgeStyle('Running')}>Pending operator</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub }}><span>2. Deploy countermeasure</span><span>Waiting</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub }}><span>3. Monitor effectiveness</span><span>Waiting</span></div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '10px 20px', backgroundColor: theme.accentRed, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Deploy Countermeasure</button>
          <button style={{ padding: '10px 20px', backgroundColor: theme.accentBlue, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>RF Jamming</button>
        </div>
      </div>

      <div style={{ ...cardStyle, borderLeft: `4px solid ${theme.accentYellow}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}><h3 style={{ margin: 0 }}>RESPONSE-002 · TGT-002 — Tier 2 Monitor</h3><span style={badgeStyle('Running')}>Monitoring</span></div>
        <p style={{ color: theme.textSub, marginBottom: '20px' }}>Secondary target (Mavic-class) detected with threat score 54. Current trajectory non-hostile. Continue monitoring per AC1 protocol.</p>
      </div>
    </div>
  );
}