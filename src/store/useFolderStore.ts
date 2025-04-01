import { GetFoldersResponse } from '@api/folder/api';
import { create } from 'zustand';

interface FolderState {
  folders: GetFoldersResponse[];
  setFolders: (folders: GetFoldersResponse[]) => void;
  selectedFolderId: number | string;
  setSelectedFolderId: (value: number | string) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  folders: [],
  setFolders: (folders) => set({ folders }),
  selectedFolderId: '전체', // default
  setSelectedFolderId: (value) => set({ selectedFolderId: value }),
}));
