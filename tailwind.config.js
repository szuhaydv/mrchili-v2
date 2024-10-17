// @ts-check
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte}",

    join(require.resolve('@skeletonlabs/skeleton') + '/../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1680px"
      }
    },
    fontFamily: {
      "inter": ["Inter", "ui-sans-serif"],
      "knewave": ["Knewave", "Inter"],
      "freeman": ["Freeman", "Inter"]
    },
    fontSize: {
      "sm": "1rem",
      "md": "1.375rem",
      "lg": "2rem",
      "sxl": "2.8125rem",
      "xl": "4rem",
      "2xl": "5.625rem"
    }
  },
  plugins: [
    skeleton({
      themes: { preset: ["skeleton"] }
    })
  ],
}

