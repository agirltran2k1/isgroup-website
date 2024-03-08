import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        'min-1001': {'min': '1001px'}
      },
    },

    colors: {
      'black_color': '#45474D',
      'gray_blur_color': '#787878',
      'gray_border_color': '#E3E3E3',
      'white_color': '#FFFFFF',
      'blue_color_1': '#80CDEB',
      'blue_color_2': '#137BAE',
    },
  },

  darkMode: "class",
  plugins: [
    nextui(),
    require('@tailwindcss/forms')
  ],
}
export default config
