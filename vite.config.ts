import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'; // Use SWC plugin as it's in devDependencies
import path from "path"; // Import path module for resolving aliases

// https://vitejs.dev/config/
// Replace your-username and repo-name below!
export default defineConfig({
  base: '/saikiran-portfolio-refined/', // use lowercase to match your URL
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


