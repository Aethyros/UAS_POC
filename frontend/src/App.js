import React from 'react';

// --- Reusable Style Objects ---
const theme = {
  bgBase: '#0B101E',
  bgCard: '#151C2C',
  bgSidebar: '#101623',
  textMain: '#FFFFFF',
  textSub: '#8B95A5',
  border: '#2A3441',
  accentGreen: '#4CAF50',
  accentYellow: '#F5A623',
  accentBlue: '#5C7CFA'
};

const cardStyle = {
  backgroundColor: theme.bgCard,
  borderRadius: '8px',
  padding: '20px',
  flex: 1,
};

const badgeStyle = (status) => ({
  backgroundColor: status === 'Active' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(245, 166, 35, 0.1)',
  color: status === 'Active' ? theme.accentGreen : theme.accentYellow,
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  display: 'inline-block'
});

const barStyle = (color, width) => ({
  height: '6px',
  backgroundColor: '#2A3441',
  borderRadius: '3px',
  marginTop: '8px',
  overflow: 'hidden',
  position: 'relative'
});

const fillStyle = (color, width) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: width,
  backgroundColor: color,
  borderRadius: '3px'
});

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: theme.bgBase, color: theme.textMain, fontFamily: 'sans-serif' }}>
      
      {/* --- SIDEBAR --- */}
      <div style={{ width: '240px', backgroundColor: theme.bgSidebar, borderRight: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 0', marginTop: '60px' }}>
          <div style={{ padding: '15px 20px', color: theme.accentGreen, backgroundColor: 'rgba(76,175,80,0.05)', borderLeft: `3px solid ${theme.accentGreen}`, cursor: 'pointer' }}>Capture Sensor Data</div>
          <div style={{ padding: '15px 20px', color: theme.textSub, cursor: 'pointer' }}>Process Sensor Data</div>
          <div style={{ padding: '15px 20px', color: theme.textSub, cursor: 'pointer' }}>Sensor Fusion & ID</div>
          <div style={{ padding: '15px 20px', color: theme.textSub, cursor: 'pointer' }}>Track Target</div>
          <div style={{ padding: '15px 20px', color: theme.textSub, cursor: 'pointer' }}>Assess Threat</div>
          <div style={{ padding: '15px 20px', color: theme.textSub, cursor: 'pointer' }}>Execute Response</div>
        </div>
        <div style={{ padding: '20px', marginTop: 'auto' }}>
          <p style={{ color: theme.textSub, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Sensor Status</p>
          <p style={{ color: theme.textSub, fontSize: '0.9rem', margin: '10px 0' }}>RF Receiver</p>
          <p style={{ color: theme.textSub, fontSize: '0.9rem', margin: '10px 0' }}>Optical Camera</p>
          <p style={{ color: theme.textSub, fontSize: '0.9rem', margin: '10px 0' }}>Thermal Camera</p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', borderBottom: `1px solid ${theme.border}` }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'normal' }}>
            <strong>HDDS</strong> — Sensor Capture Console <span style={{ color: theme.accentGreen, fontSize: '1.5rem', verticalAlign: 'middle' }}>•</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: theme.textSub }}>12:00:04</span>
            <span style={badgeStyle('Active')}>All sensors active</span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          
          {/* Top Metrics Row */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={cardStyle}>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>1,284</h1>
              <p style={{ margin: 0, color: theme.textSub }}>RF emissions captured</p>
            </div>
            <div style={cardStyle}>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>1,800</h1>
              <p style={{ margin: 0, color: theme.textSub }}>Optical frames</p>
            </div>
            <div style={cardStyle}>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '2.5rem' }}>900</h1>
              <p style={{ margin: 0, color: theme.textSub }}>Thermal frames</p>
            </div>
          </div>

          {/* Middle Status Row */}
          <div style={{ display: 'flex', gap: '20px' }}>
            
            {/* Left Column: Sensor Status */}
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
                    <tr key={id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                      <td style={{ padding: '15px 0' }}>{id}</td>
                      <td><span style={badgeStyle('Active')}>Active</span></td>
                    </tr>
                  ))}
                  <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                    <td style={{ padding: '15px 0' }}>CAM-01</td>
                    <td><span style={badgeStyle('Degraded')}>Degraded</span></td>
                  </tr>
                  {['CAM-02', 'IR-01', 'IR-02'].map(id => (
                    <tr key={id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                      <td style={{ padding: '15px 0' }}>{id}</td>
                      <td><span style={badgeStyle('Active')}>Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Column: Buffers & Logs */}
            <div style={{ ...cardStyle, flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              <div>
                <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Buffer Status</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}>
                    <span>RF data buffer</span><span>72%</span>
                  </div>
                  <div style={barStyle()}><div style={fillStyle(theme.accentBlue, '72%')}></div></div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}>
                    <span>Optical buffer</span><span>88%</span>
                  </div>
                  <div style={barStyle()}><div style={fillStyle(theme.accentYellow, '88%')}></div></div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: theme.textSub, fontSize: '0.9rem' }}>
                    <span>Thermal buffer</span><span>45%</span>
                  </div>
                  <div style={barStyle()}><div style={fillStyle(theme.accentGreen, '45%')}></div></div>
                </div>
              </div>

              <div>
                <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Exception Log</h3>
                <div style={{ fontSize: '0.9rem', color: theme.textSub, display: 'flex', gap: '15px', marginBottom: '10px' }}>
                  <span>14:23:08</span><span>CAM-01 reported signal degradation</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: theme.textSub, display: 'flex', gap: '15px' }}>
                  <span>14:22:51</span><span>Thermal sensor calibration complete</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Alert Banner */}
          <div style={{ backgroundColor: 'rgba(245, 166, 35, 0.05)', border: `1px solid rgba(245, 166, 35, 0.3)`, padding: '20px', borderRadius: '8px', color: theme.accentYellow }}>
            <strong>AC1 active:</strong> Optical visibility poor — thermal feed promoted to primary source
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
