import React, { useState, useEffect } from 'react';
import { theme } from './theme';
import mockData from './mockData.json';

// Import modular components
import CaptureScreen from './components/CaptureScreen';
import ProcessScreen from './components/ProcessScreen';
import FusionScreen from './components/FusionScreen';
import TrackScreen from './components/TrackScreen';
import AssessScreen from './components/AssessScreen';
import ResponseScreen from './components/ResponseScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('capture');
  
  // Master Global State for all moving targets
  const [targets, setTargets] = useState(mockData.targets);

  // THE MASTER GHOST BACKEND: Updates data globally every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTargets(prevTargets => prevTargets.map(tgt => {
        // TGT-001: Hostile drone closing distance to HQ
        if (tgt.id === 'TGT-001' && tgt.distanceToHQ > 0) {
          const newDistance = Math.max(0, tgt.distanceToHQ - (tgt.velocity / 2));
          // Dynamically scale the threat score higher as it gets closer
          const newThreatScore = Math.min(100, Math.floor(87 + (380 - newDistance) * 0.05));
          return { ...tgt, distanceToHQ: newDistance, threatScore: newThreatScore };
        }
        // TGT-002: Monitoring drone loitering
        if (tgt.id === 'TGT-002') {
          const altChange = Math.floor(Math.random() * 5) - 2;
          return { ...tgt, altitude: tgt.altitude + altChange };
        }
        return tgt;
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getSidebarBtnStyle = (tabName) => ({
    padding: '15px 20px', cursor: 'pointer',
    color: activeTab === tabName ? theme.accentGreen : theme.textSub,
    backgroundColor: activeTab === tabName ? 'rgba(76,175,80,0.05)' : 'transparent',
    borderLeft: activeTab === tabName ? `3px solid ${theme.accentGreen}` : '3px solid transparent'
  });

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: theme.bgBase, color: theme.textMain, fontFamily: 'sans-serif' }}>
      
      {/* SIDEBAR NAVIGATION */}
      <div style={{ width: '240px', backgroundColor: theme.bgSidebar, borderRight: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 0', marginTop: '60px' }}>
          <div style={getSidebarBtnStyle('capture')} onClick={() => setActiveTab('capture')}>Capture Sensor Data</div>
          <div style={getSidebarBtnStyle('process')} onClick={() => setActiveTab('process')}>Process Sensor Data</div>
          <div style={getSidebarBtnStyle('fusion')} onClick={() => setActiveTab('fusion')}>Sensor Fusion & ID</div>
          <div style={getSidebarBtnStyle('track')} onClick={() => setActiveTab('track')}>Track Target</div>
          <div style={getSidebarBtnStyle('assess')} onClick={() => setActiveTab('assess')}>Assess Threat</div>
          <div style={getSidebarBtnStyle('response')} onClick={() => setActiveTab('response')}>Execute Response</div>
        </div>
      </div>

      {/* DYNAMIC MAIN CONTENT - Passing live targets data down as props */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'capture' && <CaptureScreen />}
        {activeTab === 'process' && <ProcessScreen />}
        {activeTab === 'fusion' && <FusionScreen />}
        {activeTab === 'track' && <TrackScreen targets={targets} />}
        {activeTab === 'assess' && <AssessScreen targets={targets} />}
        {activeTab === 'response' && <ResponseScreen />}
      </div>

    </div>
  );
}
