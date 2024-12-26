import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // 프로젝트의 루트 디렉토리를 src로 설정
  build: {
    outDir: '../build', // 빌드 결과물은 build 폴더에 저장
    rollupOptions: {
      input: {
        // 템플릿 파일을 지정
        main: new URL('spam-pie/index.html', import.meta.url).pathname, // main.html을 엔트리 파일로 설정
      },
    },
  },
});