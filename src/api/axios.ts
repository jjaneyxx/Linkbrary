import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  headers: { 'Content-Type': 'application/json' },
});

// 4xx error
export interface ErrorResponse {
  message: string;
}
