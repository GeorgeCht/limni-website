/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        canela: ['var(--font-canela)', 'Times', 'serif'],
        jetbrains: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
