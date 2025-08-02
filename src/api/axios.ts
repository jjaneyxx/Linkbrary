import axios from 'axios';

// apiClient : axios 인스턴스 (새로운 axios 객체) 를 만듬

export const apiClient = axios.create({
  // 모든 API 요청에서 공통 URL 자동 접두어
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  // 기본 Content-Type 설정 : 요청의 body 가 JSON 형식으로 보내진다는 걸 서버에게 알림
  headers: { 'Content-Type': 'application/json' },
});

// request interceptor : token 있는 경우 헤더에 Bearer token 추가
apiClient.interceptors.request.use((config) => {
  // 로컬 스토리지에서 액세스 토큰을 가져와
  const token = localStorage.getItem('accessToken');
  if (token) {
    // 각 요청의 Authorization 헤더에 Bearer 토큰을 추가
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 4xx error
export interface ErrorResponse {
  name: string;
  message: string;
}
