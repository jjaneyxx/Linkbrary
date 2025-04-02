import { create } from 'zustand';

interface PaginationState {
  totalCount: number; // total link count
  setTotalCount: (value: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  totalCount: 0,
  setTotalCount: (value) => set({ totalCount: value }),
}));
