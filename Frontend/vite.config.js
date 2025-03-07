import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Set the root to the current directory (Frontend)
  publicDir: "public", // Specify the public directory
  build: {
    outDir: "dist", // Output the build files to a `dist` folder
    emptyOutDir: true, // Clear the output directory before building
  },
});
