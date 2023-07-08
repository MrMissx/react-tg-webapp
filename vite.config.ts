import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, tsConfigFilePath: "./tsconfig.json" })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-tg-webapp",
    },
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      treeshake: true,
      external: ["react", "react-dom"],
      output: {
        format: "esm",
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
