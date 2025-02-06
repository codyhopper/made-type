import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
        addUtilities({
            '.kern': {
                'font-kerning': 'normal',
            },
            '.ligatures': {
                'font-variant-ligatures': 'common-ligatures',
            },
        })
    })
  ],
} satisfies Config;
