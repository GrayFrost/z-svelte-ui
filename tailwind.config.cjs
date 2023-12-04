/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		extend: {
			minWidth: {
				5: '1.25rem'
			},
			boxShadow: {
				'badge': '0 0 0 1px #ffffff'
			},
			colors: {
				success: '#b7eb8f',
				info: '#91caff',
				warning: '#ffe58f',
				error: '#ffccc7'
			}
		}
	},

	plugins: []
};

module.exports = config;
