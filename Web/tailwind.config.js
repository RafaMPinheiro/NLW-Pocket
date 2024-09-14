/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateRows: {
				dialog: "1fr min-content",
			},
		},
	},
	plugins: [],
};
