/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        semantic:{
          primary:{
            "600":"var(--itc-Colors-Semantic-Primary-600)"
          },
          action:{
            '500':'var(--itc-Colors-Semantic-Action-500)',
            '600':'var(--itc-Colors-Semantic-Action-600)'
          }
        }
      }
    },
  },
  plugins: [],
};
