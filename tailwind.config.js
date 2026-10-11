/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Powder-blue family — the polka-dot blue from the reference
        blue: {
          sky: '#E7F0F6',
          pastel: '#A9C6DD',
          powder: '#CBDDEB',
          deep: '#3F6076',
        },
        // Warm brown family — satin chocolate → walnut → tortoiseshell amber
        chocolate: '#3F271D',
        walnut: '#6A4433',
        caramel: '#A9692F',
        mocha: '#C8B2A0',
        // Canvas (warmer, so brown feels at home)
        cream: '#F3ECE0',
        paper: '#FBF8F2',
        sage: '#A7B5A0',
        // Text
        ink: '#2B2A26',
        muted: '#79756C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        frame: '0 1px 2px rgba(48,47,43,0.08), 0 8px 24px -12px rgba(48,47,43,0.18)',
        lift: '0 2px 4px rgba(48,47,43,0.06), 0 18px 40px -20px rgba(48,47,43,0.28)',
      },
      maxWidth: {
        reading: '68ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
