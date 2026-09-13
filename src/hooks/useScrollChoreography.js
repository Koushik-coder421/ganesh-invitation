import { useEffect } from 'react';

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function seg(p, a, b) {
  return clamp01((p - a) / (b - a));
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function sceneProgress(node, viewportH) {
  if (!node) return 0;
  const r = node.getBoundingClientRect();
  return clamp01((viewportH - r.top) / Math.max(1, r.height));
}

const BELL_SPECS = [
  { index: 0, a: 0.04, b: 0.30, startY: -150 },
  { index: 1, a: 0.08, b: 0.36, startY: -190 },
  { index: 2, a: 0.11, b: 0.40, startY: -190 },
  { index: 3, a: 0.15, b: 0.46, startY: -150 }
];

export function useScrollChoreography({
  sec2Ref,
  sec3Ref,
  garlandLRef,
  garlandRRef,
  bellRefs,
  diyaLRef,
  diyaRRef,
  inviteRef,
  cardRef,
  cardRegionRef,
  mouseRef,
  bubbleRef,
  heroTextRef,
  heroVideoRef
}) {
  useEffect(() => {
    let rafId = null;
    let isTicking = false;

    function frame() {
      const vh = window.innerHeight;

      // Scene 01: Hero text fade
      if (heroTextRef.current) {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        heroTextRef.current.style.opacity = Math.max(0, 1 - y / (vh * 0.45));
      }

      // Scene 02: Invitation scene
      if (sec2Ref.current) {
        const p = sceneProgress(sec2Ref.current, vh);

        // Garlands
        const g = easeOut(seg(p, 0, 0.26));
        if (garlandLRef.current) {
          garlandLRef.current.style.transform = `translate3d(${-110 * (1 - g)}%, 0, 0)`;
        }
        if (garlandRRef.current) {
          garlandRRef.current.style.transform = `translate3d(${110 * (1 - g)}%, 0, 0)`;
        }

        // Bells
        BELL_SPECS.forEach(spec => {
          const node = bellRefs.current[spec.index];
          if (node) {
            const t = easeOut(seg(p, spec.a, spec.b));
            node.style.transform = `translate3d(0, ${spec.startY * (1 - t)}%, 0)`;
          }
        });

        // Diyas
        const d = easeOut(seg(p, 0.26, 0.54));
        if (diyaLRef.current) {
          diyaLRef.current.style.transform = `translate3d(${-130 * (1 - d)}%, 0, 0)`;
        }
        if (diyaRRef.current) {
          diyaRRef.current.style.transform = `translate3d(${130 * (1 - d)}%, 0, 0) scaleX(-1)`;
        }

        // Invitation Copy
        const i = seg(p, 0.44, 0.70);
        if (inviteRef.current) {
          inviteRef.current.style.opacity = i;
          inviteRef.current.style.transform =
            `translate3d(0, ${26 * (1 - easeOut(i))}px, 0) scale(${0.96 + 0.04 * i})`;
        }
      }

      // Scene 03: Details scene
      if (sec3Ref.current) {
        const p3 = sceneProgress(sec3Ref.current, vh);

        // Card
        const c = seg(p3, 0.05, 0.35);
        if (cardRef.current) {
          cardRef.current.style.opacity = c;
          cardRef.current.style.transform =
            `translate3d(0, ${25 * (1 - easeOut(c))}px, 0)`;
        }

        // Mouse & Speech Bubble
        const m = easeOut(seg(p3, 0.15, 0.45));
        if (mouseRef.current) {
          mouseRef.current.style.transform = `translate3d(${135 * (1 - m)}%, 0, 0)`;
        }
        if (bubbleRef.current) {
          bubbleRef.current.style.opacity = seg(p3, 0.45, 0.65);
        }
      }

      isTicking = false;
    }

    function requestTick() {
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(frame);
      }
    }

    function kickVideo() {
      const v = heroVideoRef.current;
      if (!v || !v.paused) return;
      v.muted = true;
      const pr = v.play();
      if (pr && pr.catch) pr.catch(() => {});
    }

    // Initial frame render
    frame();
    kickVideo();

    document.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        requestTick();
        kickVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [
    sec2Ref,
    sec3Ref,
    garlandLRef,
    garlandRRef,
    bellRefs,
    diyaLRef,
    diyaRRef,
    inviteRef,
    cardRef,
    cardRegionRef,
    mouseRef,
    bubbleRef,
    heroTextRef,
    heroVideoRef
  ]);
}
