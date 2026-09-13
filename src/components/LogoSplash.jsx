import React, { useState } from 'react';

export function LogoSplash({ onEnter }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Audio cue optionally if supported
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note (bell chime)
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      // Audio context ignored if blocked
    }

    setTimeout(() => {
      onEnter();
    }, 750);
  };

  return (
    <div className={`logo-splash ${isTransitioning ? 'logo-splash--leaving' : ''}`}>
      {/* Ambient glowing background circles & sparks */}
      <div className="logo-splash__bg">
        <div className="splash-glow splash-glow--1"></div>
        <div className="splash-glow splash-glow--2"></div>
        <div className="splash-mandala"></div>
        <div className="splash-sparks">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="logo-splash__container">
        <p className="splash-mantra">॥ श्री गणेशाय नमः ॥</p>

        {/* Central Dual Logo Container */}
        <div 
          className="splash-logo-card"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Click to open invitation"
        >
          <div className="splash-logo-aura"></div>
          
          <div className="splash-logos">
            {/* Ganeshotsav Logo */}
            <div className="splash-logo-item">
              <div className="splash-badge">
                <span className="splash-symbol">🕉️</span>
              </div>
              <div className="splash-text">
                <span className="splash-title">Ganeshotsav</span>
                <span className="splash-subtitle">2026</span>
              </div>
            </div>

            <div className="splash-divider">&amp;</div>

            {/* M R Academy Logo */}
            <div className="splash-logo-item">
              <div className="splash-badge splash-badge--mr">
                <img 
                  src="/assets/mr_academy_logo.jpg" 
                  alt="M R Academy Logo" 
                  className="splash-img" 
                />
              </div>
              <div className="splash-text">
                <span className="splash-title splash-title--mr">M R ACADEMY</span>
                <span className="splash-subtitle splash-subtitle--mr">EST. 2021</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="splash-cta-btn"
          onClick={handleClick}
        >
          <span className="splash-cta-icon">✨</span>
          <span>Click to Open Invitation</span>
          <span className="splash-cta-icon">✨</span>
        </button>

        <p className="splash-hint">निमंत्रण पाहण्यासाठी लोगोवर क्लिक करा</p>
      </div>
    </div>
  );
}
