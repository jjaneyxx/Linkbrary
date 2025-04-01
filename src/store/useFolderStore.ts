import { GetFoldersResponse } from '@api/folder/api';
import { create } from 'zustand';

interface FolderState {
  folders: GetFoldersResponse[];
  setFolders: (folders: GetFoldersResponse[]) => void;
  selectedFolderId: number | null;
  setSelectedFolderId: (value: number | null) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  folders: [],
  setFolders: (folders) => set({ folders }),
  selectedFolderId: null,
  setSelectedFolderId: (value) => set({ selectedFolderId: value }),
}));
