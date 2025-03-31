import { create } from 'zustand';
import { LinkResponse } from '../api/link/api';

// 전체 링크 리스트 관리
interface LinkListState {
  linkList: LinkResponse[];
  addLink: (link: LinkResponse) => void;
  setLinkList: (links: LinkResponse[]) => void;
}

export const useLinkStore = create<LinkListState>((set) => ({
  linkList: [],

  // 추가된 링크를 기존의 배열에 추가
  addLink: (link) =>
    set((state) => ({
      linkList: [link, ...state.linkList],
    })),

  // 링크 리스트
  setLinkList: (links) => set({ linkList: links }),
}));
