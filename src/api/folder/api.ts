import { apiClient } from '../axios';

interface GetFoldersResponse {
  id: number;
  createdAt: string;
  name: string;
  linkCount: number;
}

interface PostFolderBody {
  name: string;
}

interface PostFoldersResponse {
  id: number;
  createdAt: string;
  name: string;
}

interface GetFolderByIdResponse {
  id: number;
  createdAt: string;
  name: string;
}

interface PutFolderByIdResponse {
  id: number;
  createdAt: string;
  name: string;
}

// get All Folders
export const getAllFolders = async () => {
  const response = await apiClient.get<GetFoldersResponse[]>('/folders');
  return response.data;
};

// post
export const postFolder = async (data: PostFolderBody) => {
  const response = await apiClient.post<PostFoldersResponse>('/folders', data);
  return response.data;
};

// get
export const getFolderById = async ({ folderId }: { folderId: number }) => {
  const response = await apiClient.get<GetFolderByIdResponse>(`/folders/${folderId}`);
  return response.data;
};

// delete
export const deleteFolderById = async ({ folderId }: { folderId: number }) => {
  return await apiClient.delete<void>(`/folders/${folderId}`);
};

// put
export const putFolderById = async ({ folderId, name }: { folderId: number; name: string }) => {
  const response = await apiClient.put<PutFolderByIdResponse>(`/folders/${folderId}`, { name });
  return response.data;
};
