/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "baby-powder": "#ffffff",
        "rich-black": "#011627",
        "light-sea-green": "#2EC4B6",
        "custom-black": "#292a2a",
      },
    },
  },
  plugins: [],
};
