import React from 'react';

export default function StatCard({ title, value, icon: Icon, trend, trendType = 'up', iconBg = '#eff6ff', iconColor = '#2563eb' }) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        {Icon && (
          <div className="stat-card-icon-wrap" style={{ backgroundColor: iconBg, color: iconColor }}>
            <Icon size={18} strokeWidth={2.2} />
          </div>
        )}
      </div>
      <div>
        <div className="stat-card-value">{value}</div>
        {trend && (
          <div className="stat-card-meta">
            <span className={trendType === 'up' ? 'stat-card-trend-up' : 'stat-card-trend-muted'}>
              {trend}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
