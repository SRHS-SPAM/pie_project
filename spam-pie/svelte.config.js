import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      // URL 경로를 커스터마이징하는 경우 설정 필요
      base: '/spam-pie', // 기본값: ''
    },
  },
};
