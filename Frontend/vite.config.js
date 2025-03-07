import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Use the React plugin
  root: "./src", // Set the root to the `src` folder
  build: {
    outDir: "../dist", // Output the build files to a `dist` folder in the root
    emptyOutDir: true, // Clear the output directory before building
  },
});
