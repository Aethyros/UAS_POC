import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function TrackScreen({ targets }) {
  const tgt1 = targets.find(t => t.id === 'TGT-001');
  const tgt2 = targets.find(t => t.id === 'TGT-002');

  const getRadarPos = (distance, angleDeg) => {
    const maxRadarRange = 1000;
    const maxPixelRadius = 150;
    const radius = (distance / maxRadarRange) * maxPixelRadius;
    
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const x = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;
    
    return { left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' };
  };

  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Target Tracking Module <span style={{ color: theme.accentRed }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><span style={{ color: theme.textSub }}>Update: Live Simulation</span><span style={badgeStyle('Error')}>2 targets active</span></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Altitude</p><h3 style={{ margin: 0 }}>{tgt1.altitude}m</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Velocity</p><h3 style={{ margin: 0 }}>{tgt1.velocity}m/s</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Heading</p><h3 style={{ margin: 0 }}>{tgt1.heading}</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Distance to HQ</p><h3 style={{ margin: 0, color: theme.accentRed }}>{Math.floor(tgt1.distanceToHQ)}m</h3></div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ ...cardStyle, flex: 'none', minHeight: '350px', padding: 0, position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
             <div style={{ width: '300px', height: '300px', borderRadius: '50%', border: '1px dashed #2A3441', position: 'absolute' }}></div>
             <div style={{ width: '150px', height: '150px', borderRadius: '50%', border: '1px dashed #2A3441', position: 'absolute' }}></div>
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.accentGreen, position: 'absolute', zIndex: 2 }}></div> 
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.accentRed, position: 'absolute', zIndex: 3, ...getRadarPos(tgt1.distanceToHQ, 22) }}></div> 
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.accentYellow, position: 'absolute', zIndex: 3, ...getRadarPos(tgt2.distanceToHQ, 90) }}></div> 
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ ...cardStyle, flex: 1 }}>
              <h4 style={{ marginTop: 0, marginBottom: '15px' }}>Tracking Pipeline</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>1. Initialize tracking matrix</span><span style={badgeStyle('Done')}>Done</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>2. Compute velocity vectors</span><span style={badgeStyle('Done')}>Done</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>3. Predict trajectory path</span><span style={badgeStyle('Done')}>Done</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>4. Assess trajectory risk</span><span style={badgeStyle('Error')}>Alert</span></div>
              </div>
            </div>
            <div style={{ ...cardStyle, flex: 1 }}>
              <h4 style={{ marginTop: 0, marginBottom: '15px' }}>Timeline Event Log</h4>
              <div style={{ fontSize: '0.85rem', color: theme.textSub, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div><span style={{ color: theme.accentRed, marginRight: '10px' }}>•</span>14:23:14 — TGT-001 trajectory toward HQ — alert triggered</div>
                <div><span style={{ color: theme.accentYellow, marginRight: '10px' }}>•</span>14:23:08 — TGT-002 velocity increased to 28m/s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}