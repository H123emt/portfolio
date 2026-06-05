/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        primary: "#A855F7",
        "primary-light": "#C084FC",
        accent: "#EF4444",
        border: "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "purple-glow": "radial-gradient(circle at center, rgba(168,85,247,0.15) 0%, transparent 70%)",
        "hero-mesh":
          "radial-gradient(at 20% 50%, rgba(168,85,247,0.12) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(192,132,252,0.08) 0px, transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168,85,247,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(168,85,247,0.6)" },
        },
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
