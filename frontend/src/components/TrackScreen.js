import React from 'react';
import { theme, cardStyle, badgeStyle } from '../theme';

export default function TrackScreen() {
  return (
    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', flex: 1 }}>
      <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontWeight: 'normal' }}><strong>HDDS</strong> — Target Tracking Module <span style={{ color: theme.accentRed }}>•</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><span style={{ color: theme.textSub }}>Update: 500ms</span><span style={badgeStyle('Error')}>2 targets active</span></div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Left Telemetry Column */}
        <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Altitude</p><h3 style={{ margin: 0 }}>142m</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Velocity</p><h3 style={{ margin: 0 }}>28m/s</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Heading</p><h3 style={{ margin: 0 }}>NNE 22°</h3></div>
          <div style={{...cardStyle, padding: '15px'}}><p style={{ margin: '0 0 5px 0', color: theme.textSub, fontSize: '0.9rem' }}>Distance to HQ</p><h3 style={{ margin: 0, color: theme.accentRed }}>380m</h3></div>
        </div>

        {/* Main Radar & Panels */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Fake Radar Map */}
          <div style={{ ...cardStyle, height: '300px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
             <div style={{ width: '200px', height: '200px', borderRadius: '50%', border: '1px dashed #2A3441', position: 'absolute' }}></div>
             <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px dashed #2A3441', position: 'absolute' }}></div>
             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: theme.accentGreen, zIndex: 2 }}></div> {/* HQ */}
             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: theme.accentRed, position: 'absolute', top: '80px', right: '150px' }}></div> {/* TGT-001 */}
             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: theme.accentYellow, position: 'absolute', bottom: '100px', left: '200px' }}></div> {/* TGT-002 */}
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