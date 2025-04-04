import { getAllLinks, getFolderLinks, LinkResponse } from '@api/link/api';
import { create } from 'zustand';
import { usePaginationStore } from './usePaginationStore';

const setTotalLinkCount = usePaginationStore.getState().setTotalCount;

interface LinkListState {
  linkList: LinkResponse[];
  setLinkList: (links: LinkResponse[]) => void;
  selectedLinkId: number | null;
  setSelectedLinkId: (value: number | null) => void;
  fetchAllLinks: (currentPage: number) => void;
  fetchFolderLinks: (selectedFolderId: number, currentPage: number) => void;
}

export const useLinkStore = create<LinkListState>((set) => ({
  linkList: [],
  setLinkList: (links) => set({ linkList: links }),

  selectedLinkId: null,
  setSelectedLinkId: (value) => set({ selectedLinkId: value }),

  fetchAllLinks: async (currentPage: number) => {
    try {
      const response = await getAllLinks({ page: currentPage, pageSize: 9 });
      set({ linkList: response.list });
      setTotalLinkCount(response.totalCount);
    } catch (error) {
      console.error(error);
    }
  },

  fetchFolderLinks: async (selectedFolderId: number, currentPage: number) => {
    try {
      const response = await getFolderLinks({
        folderId: selectedFolderId,
        page: currentPage,
        pageSize: 9,
      });
      set({ linkList: response.list });
      setTotalLinkCount(response.totalCount);
    } catch (error) {
      console.error(error);
    }
  },
}));
