import { create } from 'zustand';

interface FolderState {
  selectedFolder: string | '';
  setSelectedFolder: (value: string) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  selectedFolder: '전체', // default
  setSelectedFolder: (value) => set({ selectedFolder: value }),
}));
