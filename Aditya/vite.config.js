import { defineConfig } from 'vite'
import dotenv from 'dotenv'
dotenv.config()

import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
    server:{
    port:process.env.VITE_port,
    host:process.env.VITE_host
  }
})
