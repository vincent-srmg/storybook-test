/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '1.1'],
      sm: ['16px', '1.1'],
      base: ['16px', '1.1'],
      md: ['20px', '1.1'],
      lg: ['25px', '1.1'],
      xl: ['30px', '1.1'],
      '2xl': ['40px', '1.1'],
      '3xl': ['48px', '1.1'],
      '4xl': ['60px', '1.1'],
      '5xl': ['76px', '1.1'],
      '6xl': ['96px', '1.1'],
      '7xl': ['120px', '1.1'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '327px',
        sm: '560px',
        md: '688px',
        lg: '864px',
        xl: '1080px',
        '2xl': '1200px',
        '3xl': '1600px',
      }
    },
    extend: {},
  },
  plugins: [],
}
