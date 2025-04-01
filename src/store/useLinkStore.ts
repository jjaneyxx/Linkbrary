import { LinkResponse } from '@api/link/api';
import { create } from 'zustand';

interface LinkListState {
  linkList: LinkResponse[];
  addLink: (link: LinkResponse) => void;
  setLinkList: (links: LinkResponse[]) => void;
  selectedLinkId: number | null;
  setSelectedLinkId: (value: number | null) => void;
}

export const useLinkStore = create<LinkListState>((set) => ({
  linkList: [],
  setLinkList: (links) => set({ linkList: links }),

  selectedLinkId: null,
  setSelectedLinkId: (value) => set({ selectedLinkId: value }),

  addLink: (link) =>
    set((state) => ({
      linkList: [link, ...state.linkList],
    })),
}));
