import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
				foreground: 'var(--foreground)',
				secondary: '#f7be27',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
		  },
			fontFamily: {
				oswald: ['var(--font-oswald)'],
				lilita_one: ['var(--font-lilita-one)'],
			},
  	}
  },
  plugins: [require("tailwindcss-animate")],

} satisfies Config;