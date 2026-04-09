import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        walnut: "#3E2C23",
        oak: "#A47551",
        steel: "#5E6A71",
        cream: "#F5F3EF",
        charcoal: "#2B2B2B",
        ember: "#C0602E"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(62,44,35,0.10)",
        warm: "0 12px 30px rgba(62,44,35,0.16)"
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem"
      },
      backgroundImage: {
        "timber-hero": "linear-gradient(135deg, #F5F3EF 0%, #efe7df 55%, #e7ddd4 100%)",
        "timber-warm": "linear-gradient(135deg, #A47551 0%, #3E2C23 100%)"
      }
    },
  },
  plugins: [],
};

export default config;
