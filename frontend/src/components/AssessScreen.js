import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function AssessScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Threat Assessment Module <span style={{ color: theme.accentRed }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><span style={{ color: theme.textSub }}>Trigger: tracking data available</span><span style={badgeStyle('Error')}>Threat level: HIGH</span></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...cardStyle, flex: 1.5 }}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>TGT-001 threat score</p><div><span style={{ fontSize: '2.5rem', color: theme.accentRed, fontWeight: 'bold' }}>87</span><span style={{ color: theme.textSub }}> / 100 · Tier 1 critical</span></div></div>
        <div style={{ ...cardStyle, flex: 1.5 }}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>TGT-002 threat score</p><div><span style={{ fontSize: '2.5rem', color: theme.accentYellow, fontWeight: 'bold' }}>54</span><span style={{ color: theme.textSub }}> / 100 · Tier 2 monitor</span></div></div>
        <div style={{ ...cardStyle, flex: 1 }}><p style={{ margin: '0 0 5px 0', color: theme.textSub }}>Assessment steps</p><h1 style={{ margin: 0, fontSize: '2.5rem' }}>4/4</h1><p style={{ margin: 0, color: theme.textSub }}>complete</p></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...cardStyle, flex: 1.5 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Threat Factor Breakdown — TGT-001</h3>
          <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>Proximity to protected zone <span style={badgeStyle('Error')}>Critical</span></span><span>92%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px' }}><div style={{ height: '100%', width: '92%', backgroundColor: theme.accentRed, borderRadius: '3px' }}></div></div></div>
          <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>Trajectory toward HQ <span style={badgeStyle('Error')}>High</span></span><span>82%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px' }}><div style={{ height: '100%', width: '82%', backgroundColor: theme.accentRed, borderRadius: '3px' }}></div></div></div>
          <div style={{ marginBottom: '25px' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>Unknown payload <span style={badgeStyle('Running')}>Medium</span></span><span>65%</span></div><div style={{ height: '6px', backgroundColor: '#2A3441', borderRadius: '3px' }}><div style={{ height: '100%', width: '65%', backgroundColor: theme.accentYellow, borderRadius: '3px' }}></div></div></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Analyze target characteristics</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Evaluate trajectory intent</span><span style={badgeStyle('Error')}>Hostile path</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>3. Cross-check threat database</span><span style={badgeStyle('Done')}>Done</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>4. Assign threat tier</span><span style={badgeStyle('Error')}>Tier 1 Critical</span></div>
          </div>
        </div>

        <div style={{ ...cardStyle, flex: 1 }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Score Escalation Timeline</h3>
          <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}><span style={{ color: theme.textSub }}>14:23:14</span><div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(229, 57, 53, 0.2)', color: theme.accentRed, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>87</div><span style={{ flex: 1 }}>Score escalated to 87 — Tier 1 critical alert triggered</span></div>
            <div style={{ display: 'flex', gap: '15px' }}><span style={{ color: theme.textSub }}>14:23:08</span><div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(245, 166, 35, 0.2)', color: theme.accentYellow, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>54</div><span style={{ flex: 1 }}>Score increased to 54 — trajectory toward HQ confirmed</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}