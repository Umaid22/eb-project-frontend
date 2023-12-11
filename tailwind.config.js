/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      width: {
        100: "100px",
        120: "120px",
        237: "237px",
        260: "260px",
        269: "269px",
        320: "320px",
        340: "340px",
        350: "350px",
        369: "369px",
        420: "420px",
        469: "469px",
        500: "500px",
        520: "520px",
        569: "569px",
        600: "600px",
        670: "670px"
      },
      maxWidth: {
        260: "260px",
        500: "500px"
      },
      height: {
        180: "180px",
        216: "216px",
        280: "280px",
        370: "370px",
        436: "436px"
      },
      colors: {
        c1a: "#151515",
        c1b: "#575757",
        c1c: "#A9A9A9",
        c1d: "#D1D1D1",
        c1f: "#F5F5F5",
        c1h: "#F9F9F9",
        c1j: "#FFFFFF",
        c2a: "#6A983C",
        c2b: "#46760A",
        c2c: "#92C064",
        c2d: "#C8DEB3",
        c2e: "#F4F8EC",
        c4a: "#E5704B",
        f1f1: "#F1F1F1"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      fontSize: {
        15: "15px",
        17: "17px",
        22: "22px",
        26: "26px",
        32: "32px"
      },
      backgroundImage: {
        // freshnesecom: "url('/public/assets/icons/Freshnesecom.svg')",
      },
      keyframes: {
        fading: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadingIn: 'fading 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

