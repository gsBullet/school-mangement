import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs/promises';

let resolve = path.resolve;

/**

npm i vite @vitejs/plugin-react @reduxjs/toolkit @types/react @types/react-dom react react-dom react-redux react-router-dom

*/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve('./public/management/central_branch/index.tsx'),
        },
    },
    publicDir: false,
    build: {
        outDir: './public/management_build/central_branch',
        manifest: false,
        sourcemap: true,
        rollupOptions: {
            input: resolve(
                __dirname,
                'public/management/central_branch/index.tsx',
            ),
            output: {
                entryFileNames: 'central_branch.js',
            },
        },
    },
    esbuild: {
        loader: 'tsx',
        include: /public\/management\/central_branch\/.*\.tsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            {
                                filter: /public\/management\/central_branch\/.*\.js$/,
                            },
                            async (args) => ({
                                loader: 'tsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            }),
                        );
                    },
                },
            ],
        },
    },
    define: {
        // _global: ({}),
        // process: {
        //     env: {},
        // }
    },
});
