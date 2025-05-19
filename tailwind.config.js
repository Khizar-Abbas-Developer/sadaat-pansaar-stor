// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#420808",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // <-- Add this line here
  ],
};
