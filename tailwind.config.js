module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        lato: ["lato-regular"],
      },
      colors: {
        "grey-blue": "#262a32",
        "dark-blue": "#011847",
        "light-green": "#84bc22",
        "mid-grey": "#a2a09e",
        "light-grey": "#d1d5d8",
        facebook: "#3b5998",
        "like-red": "#e73c68",
        dark: "#333333",
        brownish: "#45413e",
      },
      spacing: {
        s1: "40rem",
        s2: "66.25rem",
        s3: "28rem",
        s4: "34.5rem",
        s5: "12.5rem",
        s6: "21.5rem",
        fw: "1170px",
      },
    },
    content: ["./node_modules/flowbite/**/*.js"],
  },
};
