/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}'],
	darkMode: ['class', '.light'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				tertiary: 'var(--color-tertiary)',
				'black-100': 'var(--black-100)',
				'black-200': 'var(--black-200)',
				'white-100': 'var(--white-100)',
				'text-primary': 'var(--text-primary)',
				'text-secondary': 'var(--text-secondary)',
				'text-hero-subtitle': 'var(--text-hero-subtitle)',
				'text-on-card': 'var(--text-on-card)',
				'text-heading': 'var(--text-heading)',
				'text-error': 'var(--text-error)',
				'icon-color': 'var(--icon-color)',
			},
			backgroundColor: {
				'bg-input': 'var(--bg-input)',
				'bg-tag': 'var(--bg-tag)',
				'bg-tag-hover': 'var(--bg-tag-hover)',
				'bg-testimonials-header': 'var(--bg-testimonials-header)',
				'btn-send': 'var(--btn-send)',
				'btn-send-hover': 'var(--btn-send-hover)',
				'card-bg': 'var(--card-bg)',
			},
			boxShadow: {
				card: 'var(--shadow-card)',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': 'var(--bg-hero)',
			},
		},
	},
	plugins: [],
}
