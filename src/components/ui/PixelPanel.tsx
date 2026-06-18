import React from 'react';

interface PixelPanelProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger the load-in reveal by this many milliseconds. */
  revealDelay?: number;
  as?: 'div' | 'section' | 'article';
}

/** Translucent 8-bit "dialog box" that holds content over the scene. */
const PixelPanel: React.FC<PixelPanelProps> = ({ children, className = '', revealDelay = 0, as = 'div' }) => {
  const Tag = as;
  return (
    <Tag
      className={`pixel-panel reveal ${className}`}
      style={{ animationDelay: `${revealDelay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default PixelPanel;
