import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  assetsInclude: ['**/*.png'], // PNG 파일을 포함
  build: {
    outDir: '.svelte-kit/output', // SvelteKit 기본 빌드 디렉토리
    rollupOptions: {
      output: {
        manualChunks: {
        },
      },
    },
  },
});


