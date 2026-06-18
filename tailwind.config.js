/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        body: ['"VT323"', 'monospace'],
      },
      colors: {
        // Theme-driven via CSS variables set per [data-theme] in index.css.
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
      },
      maxWidth: {
        readable: '46rem',
      },
    },
  },
  plugins: [],
};
