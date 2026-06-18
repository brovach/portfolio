import React from 'react';
import { Mountain, Waves } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

/** Floating segmented control to pick between the mountain and beach worlds. */
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Choose a scene">
      <button
        type="button"
        className="seg"
        aria-pressed={theme === 'mountain'}
        onClick={() => setTheme('mountain')}
      >
        <Mountain className="w-4 h-4" aria-hidden="true" />
        Mountain
      </button>
      <button
        type="button"
        className="seg"
        aria-pressed={theme === 'beach'}
        onClick={() => setTheme('beach')}
      >
        <Waves className="w-4 h-4" aria-hidden="true" />
        Beach
      </button>
    </div>
  );
};

export default ThemeToggle;
