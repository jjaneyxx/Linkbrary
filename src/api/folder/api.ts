import { apiClient } from '../axios';

export interface GetFoldersResponse {
  id: number;
  createdAt: string;
  name: string;
  linkCount: number;
}

// request folder type
interface FolderBody {
  name: string;
}

// response folder type
interface FolderResponse {
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
export const postFolder = async (data: FolderBody) => {
  const response = await apiClient.post<FolderResponse>('/folders', data);
  return response.data;
};

// get
export const getFolderById = async (folderId: number) => {
  const response = await apiClient.get<FolderResponse>(`/folders/${folderId}`);
  return response.data;
};

// delete
export const deleteFolderById = async (folderId: number) => {
  await apiClient.delete<void>(`/folders/${folderId}`);
};

// put
export const putFolderById = async (folderId: number, data: FolderBody) => {
  const response = await apiClient.put<FolderResponse>(`/folders/${folderId}`, data);
  return response.data;
};
