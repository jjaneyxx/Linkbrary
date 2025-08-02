import { apiClient } from '../axios';

interface GetUserResponse {
  id: number;
  name: string;
  imageSource: string;
  email: string;
  createdAt: string;
}

interface PostCheckEmailBody {
  email: string ; 
}

interface PostCheckEmailResponse {
  isUsableEmail: boolean;
}

export const getUser = async () => {
  const response = await apiClient.get<GetUserResponse>('/users');
  return response.data;
};

export const postCheckEmail = async (data: PostCheckEmailBody) => {
  const response = await apiClient.post<PostCheckEmailResponse>('/users/check-email', data);
  return response.data;
};
