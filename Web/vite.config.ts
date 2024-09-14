import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import biomePlugin from "vite-plugin-biome";

export default defineConfig({
	plugins: [react(), biomePlugin()],
	server: {
		host: true,
		port: 3000,
	},
});
