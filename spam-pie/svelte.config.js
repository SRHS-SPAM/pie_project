import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18.x', // Node.js 환경에서 실행
      external: [], // 외부 의존성 비활성화
      split: false, // 빌드 크기 최적화 비활성화
    }),
    paths: {
      // URL 경로를 커스터마이징하는 경우 설정 필요
      base: '', // 기본값: ''
    },
  },
};
