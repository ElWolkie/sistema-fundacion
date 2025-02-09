import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000, // Convierte process.env.PORT a número
  },
  build: {
    outDir: "dist",
  },
});
