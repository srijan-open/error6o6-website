/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#E71D24',
        oxblood: '#8B0F16',
        maroon: '#3A0F10',
        charcoal: '#111214',
        night: '#0A0A0C',
        pearl: '#F5F5F7',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        crimson: '0 0 60px rgba(231,29,36,.34)',
        card: '0 24px 80px rgba(0,0,0,.45)',
      },
      backgroundImage: {
        'primary-red': 'linear-gradient(135deg, #E71D24 0%, #8B0F16 48%, #3A0F10 100%)',
        'energy': 'linear-gradient(135deg, #FF3C3C 0%, #E71D24 45%, #3A0F10 100%)',
      },
    },
  },
  plugins: [],
}
