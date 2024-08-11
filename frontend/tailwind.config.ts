import withMT from '@material-tailwind/react/utils/withMT'
import type { Config } from 'tailwindcss'

const config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    colors: {
      bgprimary: '#21212b',
      bgsecondary: '#181820'
    }
  },
  plugins: []
}) as Config

export default config
