import React from 'react';

const ChartCard = ({ title, subtitle, children, action, actionLabel = 'View All', style }) => {
  return (
    <div className="chart-card" style={style}>
      <div className="chart-card-header">
        <div>
          <h3>{title}</h3>
          {subtitle && <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>{subtitle}</p>}
        </div>
        {actionLabel && (
          <button className="view-all" onClick={action}>
            {actionLabel}
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default ChartCard;
