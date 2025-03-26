import { apiClient } from '../axios';

interface GetFolderLinksBody {
  folderId: number;
  page?: number;
  pageSize?: number;
}

interface GetFolderLinksResponse {
  totalCount: number;
  list: {
    id: number;
    favorite: boolean;
    url: string;
    title: string;
    imageSource: string;
    description: string;
    createdAt: string;
  }[];
}

interface PostLinkBody {
  url: string;
  folderId: number;
}

interface PostLinkResponse {
  id: number;
  favorite: boolean;
  url: string;
  title: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

interface GetAllLinksBody {
  page?: number;
  pageSize?: number;
  search: string;
}

interface GetAllLinksResponse {
  totalCount: number;
  list: {
    id: number;
    favorite: boolean;
    url: string;
    title: string;
    imageSource: string;
    description: string;
    createdAt: string;
  }[];
}

interface GetFavoriteLinksBody {
  page?: number;
  pageSize?: number;
}

interface GetFavoriteLinksResponse {
  totalCount: number;
  list: {
    id: number;
    favorite: boolean;
    url: string;
    title: string;
    imageSource: string;
    description: string;
    createdAt: string;
  }[];
}

interface PutLinkBody {
  url: string;
}

interface PutLinkResponse {
  id: number;
  favorite: boolean;
  url: string;
  title: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

interface PutFavoriteLinkBody {
  favorite: boolean;
}

interface PutFavoriteLinkResponse {
  id: number;
  favorite: boolean;
  url: string;
  title: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

// get folder links
export const getFolderLinks = async (data: GetFolderLinksBody) => {
  const { folderId, page = 1, pageSize = 10 } = data;
  const response = await apiClient.get<GetFolderLinksResponse>(`/folders/${folderId}/links`, {
    params: { page, pageSize },
  });
  return response.data;
};

// post link in folder
export const postLink = async (data: PostLinkBody) => {
  const response = await apiClient.post<PostLinkResponse>('/links', data);
  return response.data;
};

// get all Links
export const getAllLinks = async (data: GetAllLinksBody) => {
  const { page = 1, pageSize = 10, search } = data;
  const response = await apiClient.get<GetAllLinksResponse>('/links', {
    params: { page, pageSize, search },
  });
  return response.data;
};

// get favorite links
export const getFavoriteLinks = async (data: GetFavoriteLinksBody) => {
  const { page = 1, pageSize = 10 } = data;
  const response = await apiClient.get<GetFavoriteLinksResponse>('/favorites', {
    params: { page, pageSize },
  });
  return response.data;
};

// put link
export const putLink = async (linkId: number, data: PutLinkBody) => {
  const response = await apiClient.put<PutLinkResponse>(`links/${linkId}`, data);
  return response.data;
};

// delete link
export const deleteLink = async (linkId: number) => {
  await apiClient.delete<void>(`links/${linkId}`);
};

// put favorite link
export const putFavoriteLink = async (linkId: number, data: PutFavoriteLinkBody) => {
  const response = await apiClient.put<PutFavoriteLinkResponse>(`/links/${linkId}/favorite`, data);
  return response.data;
};
