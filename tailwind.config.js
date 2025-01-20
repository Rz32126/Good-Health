// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         banner: "url(./assets/Screenshot 2025-01-18 022021-BLVvS_vo.png)",
//       }
//     },
//   },
//   plugins: [require('daisyui')],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(./assets/Screenshot 2025-01-18 022021-BLVvS_vo.png)",
      }
    },
  },
  plugins: [require('daisyui')],
});

