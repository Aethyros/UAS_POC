export const theme = {
  bgBase: '#0B101E',
  bgCard: '#151C2C',
  bgSidebar: '#101623',
  textMain: '#FFFFFF',
  textSub: '#8B95A5',
  border: '#2A3441',
  accentGreen: '#4CAF50',
  accentYellow: '#F5A623',
  accentBlue: '#5C7CFA',
  accentRed: '#E53935'
};

export const cardStyle = { 
  backgroundColor: theme.bgCard, 
  borderRadius: '8px', 
  padding: '20px', 
  flex: 1 
};

export const badgeStyle = (status) => {
  let bgColor, color;
  if (status === 'Done' || status === 'Active') { bgColor = 'rgba(76, 175, 80, 0.1)'; color = theme.accentGreen; }
  else if (status === 'Running' || status === 'Degraded') { bgColor = 'rgba(245, 166, 35, 0.1)'; color = theme.accentYellow; }
  else if (status === 'Pending') { bgColor = 'rgba(139, 149, 165, 0.1)'; color = theme.textSub; }
  else { bgColor = 'rgba(229, 57, 53, 0.1)'; color = theme.accentRed; }
  
  return { backgroundColor: bgColor, color: color, padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold', display: 'inline-block' };
};