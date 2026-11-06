import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: { 100: "#e0f2f1", 500: "#0b7285", 600: "#095e6d", 700: "#074a56" } } } },
  plugins: []
} satisfies Config;
