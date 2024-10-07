/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        canela: ['var(--font-canela)', 'Times', 'serif'],
        jetbrains: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'circ-in-out': 'cubic-bezier(0.85, 0, 0.15, 1)',
      },
    },
  },
  plugins: [],
}
