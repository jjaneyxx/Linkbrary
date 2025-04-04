import { getAllFolders, GetFoldersResponse } from '@api/folder/api';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FolderState {
  folders: GetFoldersResponse[];
  setFolders: (folders: GetFoldersResponse[]) => void;
  selectedFolderId: number | null;
  setSelectedFolderId: (value: number | null) => void;
  fetchFolders: () => void;
}

export const useFolderStore = create<FolderState>()(
  // save state at localstorage
  persist(
    (set) => ({
      folders: [],
      setFolders: (folders) => set({ folders }),
      selectedFolderId: null,
      setSelectedFolderId: (value) => set({ selectedFolderId: value }),
      fetchFolders: async () => {
        try {
          const folders = await getAllFolders();
          set({ folders }); // {folders : folders}
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: 'folder-store',
    },
  ),
);
