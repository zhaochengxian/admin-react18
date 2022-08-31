import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return defineConfig({
        plugins: [
            react()
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        server: {
            host: "0.0.0.0",
            // port: 4000,
            open: true,
            strictPort: false,
            proxy: {
                "/api": {
                    target: env?.VITE_BASE_API, //动态获取不同环境的api,并兼容直接连接后台本地
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svg', '.png'],
            alias: {
                '@': path.resolve(__dirname, '/src'),
                '@c': path.resolve(__dirname, '/src/components'),
                '@v': path.resolve(__dirname, '/src/views'),
                '@assets': path.resolve(__dirname, '/src/assets'),
                'venn.js': 'venn.js/build/venn.js',
            },
        },

    });

}

