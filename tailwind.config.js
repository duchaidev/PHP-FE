/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        20: "repeat(20, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-15": "span 15 / span 15",
        "span-13": "span 13 / span 13",
      },
      colors: {
        black: "#292F33",
        white: "#FFFFFF",
        grayEC: "#ECECEC",
        grayFC: "#FCFCFC",
        grayE8: "#e8e8e8",
        gray1: "#8B8B8B",
        gray2: "#505050",
        blue1: "#CCD4DA",
        blue2: "#F4F8FB",
        blue3: "#E0FFF9",
        blue4: "#D4EFFF",
        blue5: "#007EC5",
        blue6: "#00C09E",
        blue7: "#088178",
        greenBorder: "#24FF00",
        greenText: "#0FB900",
        transparent: "transparent",
        bgProfile: "#F5F5F5",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
