import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        saiki_light: {
          primary: "#B3B3F1",
          secondary: "#1B998B",
          accent: "#E34A6F",
          neutral: "#5B4B49",
          "base-100": "#FFFFFF",
          info: "#fef08a",
          success: "#60A561",
          warning: "#F7B2BD",
          error: "#e94b3f",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
