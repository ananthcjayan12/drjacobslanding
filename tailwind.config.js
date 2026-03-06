import { siteConfig } from './site.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: siteConfig.theme.colors.primary,
        secondary: siteConfig.theme.colors.secondary,
      },
      fontFamily: {
        sans: [siteConfig.theme.fonts.body, 'system-ui', 'sans-serif'],
        display: [siteConfig.theme.fonts.heading, 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
