import axios from 'axios';

interface SignupData {
  email: string;
  password: string;
  name: string;
}

export const apiClient = axios.create({
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  headers: { 'Content-Type': 'application/json' },
});

const apiRoutes = {
  checkEmail: '/users/check-email',
  signUp: '/auth/sign-up',
};

const api = {
  checkEmail: (email: string) => apiClient.post(apiRoutes.checkEmail, { email }),
  signUp: (data: SignupData) => apiClient.post(apiRoutes.signUp, data),
};

export default api;
