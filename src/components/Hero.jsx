import React from 'react';

export function Hero({ heroVideoRef, heroTextRef }) {
  return (
    <section className="hero" aria-label="Ganpati Bappa Morya">
      <video
        ref={heroVideoRef}
        className="hero__video"
        src="/uploads/Mouse_looking_at_rotating_Ganpati_202609051306.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero__scrim"></div>
      <div ref={heroTextRef} className="hero__text">
        <p className="hero__mantra">गणपती बाप्पा मोरया</p>
        <p className="hero__roman">Ganpati Bappa Morya</p>
        <div className="hero__rule"></div>
        <p className="hero__cue">Scroll to open the invitation</p>
        <p className="hero__arrow" aria-hidden="true">↓</p>
      </div>
    </section>
  );
}