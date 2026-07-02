import React, { useState } from 'react';
import { theme } from './theme';

import CaptureScreen from './components/CaptureScreen';
import ProcessScreen from './components/ProcessScreen';
import FusionScreen from './components/FusionScreen';
import TrackScreen from './components/TrackScreen';
import AssessScreen from './components/AssessScreen';
import ResponseScreen from './components/ResponseScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('capture');

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

      {/* DYNAMIC MAIN CONTENT */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'capture' && <CaptureScreen />}
        {activeTab === 'process' && <ProcessScreen />}
        {activeTab === 'fusion' && <FusionScreen />}
        {activeTab === 'track' && <TrackScreen />}
        {activeTab === 'assess' && <AssessScreen />}
        {activeTab === 'response' && <ResponseScreen />}
      </div>

    </div>
  );
}
