import React from 'react';

export function Logo({ onClick }) {
  return (
    <div className="logo-container" onClick={onClick} role="button" tabIndex={0} title="Click to view logo intro">
      {/* Ganeshotsav Logo */}
      <div className="logo-item">
        <div className="logo-badge">
          <span className="logo-symbol">🕉️</span>
        </div>
        <div className="logo-text">
          <span className="logo-title">Ganeshotsav</span>
          <span className="logo-subtitle">2026</span>
        </div>
      </div>

      <div className="logo-divider" aria-hidden="true">&amp;</div>

      {/* M R Academy Logo */}
      <div className="logo-item logo-item--mr">
        <div className="logo-badge logo-badge--mr">
          <img src="/assets/mr_academy_logo.jpg" alt="M R Academy Logo" className="logo-img" />
        </div>
        <div className="logo-text">
          <span className="logo-title logo-title--mr">M R ACADEMY</span>
          <span className="logo-subtitle logo-subtitle--mr">EST. 2021</span>
        </div>
      </div>
    </div>
  );
}
