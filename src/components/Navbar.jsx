import React from 'react';
import { Logo } from './Logo';

export function Navbar({ onLogoClick }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Logo onClick={onLogoClick} />
        
        <div className="navbar__actions">
          <span className="navbar__badge">॥ श्री गणेशाय नमः ॥</span>
          <button 
            type="button" 
            className="navbar__replay-btn"
            onClick={onLogoClick}
            title="Replay intro logo animation"
          >
            ✨ Intro
          </button>
        </div>
      </div>
    </header>
  );
}
