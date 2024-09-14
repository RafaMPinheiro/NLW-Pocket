/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateRows: {
				dialog: "min-content 1fr min-content",
			},
		},
	},
	plugins: [],
};
