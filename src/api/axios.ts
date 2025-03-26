import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  headers: { 'Content-Type': 'application/json' },
});

// 4xx error
export interface ErrorResponse {
  message: string;
}

// request interceptor : 모든 요청에 accessToken 추가
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
