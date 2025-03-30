// /client/vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "pumped-miserably-ferret.ngrok-free.app",
      "app.alexpariah.live",
      "all",
    ],
  },
});
