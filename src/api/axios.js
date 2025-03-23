import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  headers: { 'Content-Type': 'application/json' },
});

const apiRoutes = {
  checkEmail: '/users/check-email',
  signUp: '/auth/sign-up',
};

const api = {
  checkEmail: (email) => apiClient.post(apiRoutes.checkEmail, { email }),
  signUp: (data) => apiClient.post(apiRoutes.signUp, data),
};

export default api;
