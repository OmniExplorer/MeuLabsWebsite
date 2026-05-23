import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D3557',
        orange: '#FF7A00',
        cream: '#FFF6EA',
        creamAlt: '#F8F1E2',
        sky: '#1995D3',
        teal: '#2CAC95'
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(13, 53, 87, 0.10)',
        pop: '0 22px 55px rgba(13, 53, 87, 0.18)'
      },
      borderRadius: {
        card: '20px'
      }
    }
  },
  plugins: []
};

export default config;
