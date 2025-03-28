/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        fontSize: {
          h1: ['56px', { lineHeight: '1.2' }],
          h2: ['40px', { lineHeight: '1.3' }],
          h3: ['32px', { lineHeight: '1.4' }],
          subtitle24: ['24px', { lineHeight: '1.4' }],
          subtitle20: ['20px', { lineHeight: '1.4' }],
          subtitle18: ['18px', { lineHeight: '1.4' }],
          body16: ['16px', { lineHeight: '1.6' }],
          body14: ['14px', { lineHeight: '1.6' }],
          button16: ['16px', { lineHeight: '1.2' }],
          button14: ['14px', { lineHeight: '1.2' }],
          caption12: ['12px', { lineHeight: '1.2' }],
          overline16: ['16px', { lineHeight: '1.2' }],
          overline12: ['12px', { lineHeight: '1.2' }],
          input14: ['14px', { lineHeight: '1.5' }],
        },
        colors: {
          primary: {
            100: "#28A8E0",
            80: "#2497C8",
            60: "#2068B0",
            40: "#1C7598",
            10: "#186480",
            5: "#145368",
            tint80: "#28C4D9",
            tint60: "#28EEE0",
            tint40: "#2888E0",
            tint30: "#28E0C4",
            tint20: "#5C86E0",
            tint10: "#28E0A8",
            tint03: "#7F6CE0",
          },
          secondary: {
            100: "#070537",
            80: "#06042F",
            60: "#050427",
            40: "#04031F",
            10: "#030217",
            tint80: "#201C52",
            tint60: "#3A356D",
            tint40: "#6E67A3",
          },
          neutral: {
            100: "#F7FCF9"
          },
        },
      },
    },
    plugins: [],
  }
  