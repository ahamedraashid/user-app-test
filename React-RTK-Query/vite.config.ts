import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    test: {
      setupFiles: [resolve(__dirname, './src/utils/test/setupTests.ts')],
      environment: 'jsdom',
      include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
      globals: true,
      coverage: {
        all: true,
        provider: 'v8',
        reporter: ['text', 'html', 'clover', 'json', 'cobertura'],
      },
    },
    server: {
      port: 3000,
    },
    build: {
      sourcemap: true,
    },
    envDir: './env',
  });
};
