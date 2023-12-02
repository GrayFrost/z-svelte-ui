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
			}
		}
	},

	plugins: []
};

module.exports = config;
