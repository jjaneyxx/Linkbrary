import axios from 'axios';

interface SignupData {
  email: string;
  password: string;
  name: string;
}

interface SigninData {
  email: string;
  password: string;
}

export const apiClient = axios.create({
  baseURL: 'https://linkbrary-api.vercel.app/13-6',
  headers: { 'Content-Type': 'application/json' },
});

const apiRoutes = {
  checkEmail: '/users/check-email',
  signUp: '/auth/sign-up',
  signIn: '/auth/sign-in',
};

const api = {
  checkEmail: (email: string) => apiClient.post(apiRoutes.checkEmail, { email }),
  signUp: (data: SignupData) => apiClient.post(apiRoutes.signUp, data),
  signIn: (data: SigninData) => apiClient.post(apiRoutes.signIn, data),
};

export default api;
