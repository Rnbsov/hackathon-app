import type { Config } from 'tailwindcss'

const withMT = require('@material-tailwind/react/utils/withMT')

const config: Config = {
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
}

module.exports = withMT(config)
export default config
