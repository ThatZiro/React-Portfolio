import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import process from '.eslintrc.cjs';
dotenv.config();

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: process.env.PORT || 4173,
  },
});
