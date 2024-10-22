// @ts-check
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte}",
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton') + '/../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      screens: {
        "xxs": "400px",
        "xxsm": "480px",
        "bl": "900px",
        "xxl": "1366px",
        "3xl": "1680px"
      },
      boxShadow: {
        "inset-lg": "inset 4px 4px 8px rgba(0, 0, 0, 0.25)"
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
    }),
    flowbitePlugin
  ],
}

