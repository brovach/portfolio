import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../theme/ThemeContext';

/** Small deterministic helper so the scene looks the same every render. */
const clouds = [
  { top: '12%', duration: '46s', delay: '-4s', opacity: 0.95 },
  { top: '20%', duration: '62s', delay: '-28s', opacity: 0.75 },
  { top: '30%', duration: '54s', delay: '-12s', opacity: 0.85 },
  { top: '8%', duration: '72s', delay: '-50s', opacity: 0.6 },
];

const birds = [
  { top: '24%', duration: '38s', delay: '-2s' },
  { top: '27%', duration: '38s', delay: '-1.4s' },
  { top: '21%', duration: '44s', delay: '-20s' },
];

const stars = [
  { top: '8%', left: '12%', dur: '3.2s', delay: '0s' },
  { top: '14%', left: '28%', dur: '2.6s', delay: '-1s' },
  { top: '6%', left: '46%', dur: '3.6s', delay: '-0.5s' },
  { top: '18%', left: '78%', dur: '2.9s', delay: '-1.8s' },
  { top: '11%', left: '88%', dur: '3.4s', delay: '-0.8s' },
  { top: '22%', left: '60%', dur: '2.4s', delay: '-2.2s' },
];

const Clouds: React.FC = () => (
  <>
    {clouds.map((c, i) => (
      <span
        key={i}
        className="cloud"
        style={{ top: c.top, animationDuration: c.duration, animationDelay: c.delay, opacity: c.opacity }}
      />
    ))}
  </>
);

const Birds: React.FC = () => (
  <>
    {birds.map((b, i) => (
      <span key={i} className="bird" style={{ top: b.top, animationDuration: b.duration, animationDelay: b.delay }} />
    ))}
  </>
);

const MountainWorld: React.FC = () => (
  <div className="scene-world">
    <div className="m-sun parallax" />
    {stars.map((s, i) => (
      <span
        key={i}
        className="star"
        style={{ top: s.top, left: s.left, animationDuration: s.dur, animationDelay: s.delay }}
      />
    ))}
    <Clouds />
    <Birds />
    <div className="ridge ridge-far parallax" />
    <div className="ridge ridge-mid parallax" />
    <div className="mist mist-1" />
    <div className="ridge ridge-near parallax" />
    <div className="mist mist-2" />
    <div className="treeline parallax" />
  </div>
);

const BeachWorld: React.FC = () => (
  <div className="scene-world">
    <div className="b-sun parallax">
      <div className="b-sun-glow" />
      <div className="b-sun-core" />
    </div>
    <Clouds />
    <div className="sailboat" />
    <div className="sea parallax" />
    <div className="sea-shimmer" />
    <Birds />
    <div className="sand parallax" />
    <div className="foam" />
  </div>
);

const Scene: React.FC = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  // Subtle pointer parallax: nudge depth layers toward the cursor.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const mx = ((e.clientX - cx) / cx) * 14;
        const my = ((e.clientY - cy) / cy) * 10;
        el.style.setProperty('--mx', `${mx.toFixed(1)}px`);
        el.style.setProperty('--my', `${my.toFixed(1)}px`);
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scene" ref={ref} aria-hidden="true">
      <div className="scene-sky" />
      {/* key={theme} remounts the world so it fades/drifts in on switch. */}
      <React.Fragment key={theme}>{theme === 'beach' ? <BeachWorld /> : <MountainWorld />}</React.Fragment>
    </div>
  );
};

export default Scene;
