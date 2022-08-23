import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default ({ mode }) => {
    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        define: {
            "process.env.NODE_ENV": `"${mode}"`,
        }
    })
}