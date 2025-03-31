import { create } from 'zustand';
import { GetFoldersResponse } from '../api/folder/api';

interface FolderState {
  selectedFolder: string | '';
  setSelectedFolder: (value: string) => void;
  folders: GetFoldersResponse[];
  setFolders: (folders: GetFoldersResponse[]) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  selectedFolder: '전체', // default
  setSelectedFolder: (value) => set({ selectedFolder: value }),
  folders: [],
  setFolders: (folders) => set({ folders }),
}));
