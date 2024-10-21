import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Fitness-Tracker/'  // Add this line, matching your repository name
});
