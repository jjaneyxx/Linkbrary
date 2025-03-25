import { apiClient } from '../apiClient';

interface SignupBody {
  email: string;
  password: string;
  name: string;
}

interface SigninBody {
  email: string;
  password: string;
}

// signup, signin response
interface AuthResponse {
  accessToken: string;
}

export const signUp = async (data: SignupBody) => {
  const response = await apiClient.post<AuthResponse>('/auth/sign-up', data);
  return response.data;
};

export const signIn = async (data: SigninBody) => {
  const response = await apiClient.post<AuthResponse>('/auth/sign-in', data);
  return response.data;
};
