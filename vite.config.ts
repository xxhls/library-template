import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	resolve: {
		alias: {
			"@": "/lib",
		},
	},
	build: {
		sourcemap: true,
		lib: {
			entry: "./lib/index.ts",
			name: "index",
			fileName: "index",
		},
	},
	plugins: [dts({ rollupTypes: true })],
});
