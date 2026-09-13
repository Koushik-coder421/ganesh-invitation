import React, { useState, useRef } from 'react';
import { LogoSplash } from './components/LogoSplash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InviteScene } from './components/InviteScene';
import { DetailsScene } from './components/DetailsScene';
import { SponsorsScene } from './components/SponsorsScene';
import { FooterScene } from './components/FooterScene';
import { useScrollChoreography } from './hooks/useScrollChoreography';
import './styles.css';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Refs for scroll choreography
  const heroVideoRef = useRef(null);
  const heroTextRef = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const garlandLRef = useRef(null);
  const garlandRRef = useRef(null);
  const bellRefs = useRef([]);
  const diyaLRef = useRef(null);
  const diyaRRef = useRef(null);
  const inviteRef = useRef(null);
  const cardRef = useRef(null);
  const cardRegionRef = useRef(null);
  const mouseRef = useRef(null);
  const bubbleRef = useRef(null);

  // Scroll choreography hook
  useScrollChoreography({
    sec2Ref: !showSplash ? sec2Ref : { current: null },
    sec3Ref: !showSplash ? sec3Ref : { current: null },
    garlandLRef: !showSplash ? garlandLRef : { current: null },
    garlandRRef: !showSplash ? garlandRRef : { current: null },
    bellRefs,
    diyaLRef: !showSplash ? diyaLRef : { current: null },
    diyaRRef: !showSplash ? diyaRRef : { current: null },
    inviteRef: !showSplash ? inviteRef : { current: null },
    cardRef: !showSplash ? cardRef : { current: null },
    cardRegionRef: !showSplash ? cardRegionRef : { current: null },
    mouseRef: !showSplash ? mouseRef : { current: null },
    bubbleRef: !showSplash ? bubbleRef : { current: null },
    heroTextRef: !showSplash ? heroTextRef : { current: null },
    heroVideoRef: !showSplash ? heroVideoRef : { current: null }
  });

  return (
    <div className="app-shell">
      {showSplash && (
        <LogoSplash onEnter={() => setShowSplash(false)} />
      )}

      <Navbar onLogoClick={() => setShowSplash(true)} />

      <main className="app-content">
        <div className="frame">
          <Hero
            heroVideoRef={heroVideoRef}
            heroTextRef={heroTextRef}
          />
          <InviteScene
            sec2Ref={sec2Ref}
            garlandLRef={garlandLRef}
            garlandRRef={garlandRRef}
            bellRefs={bellRefs}
            diyaLRef={diyaLRef}
            diyaRRef={diyaRRef}
            inviteRef={inviteRef}
          />
          <DetailsScene
            sec3Ref={sec3Ref}
            cardRegionRef={cardRegionRef}
            cardRef={cardRef}
            mouseRef={mouseRef}
            bubbleRef={bubbleRef}
          />
          <SponsorsScene />
          <FooterScene />
        </div>
      </main>
    </div>
  );
}

export default App;
