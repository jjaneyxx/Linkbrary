import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PaginationState {
  totalCount: number; // total link count
  setTotalCount: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export const usePaginationStore = create<PaginationState>()(
  // save state at localstorage
  persist(
    (set) => ({
      totalCount: 0,
      setTotalCount: (value) => set({ totalCount: value }),
      currentPage: 1,
      setCurrentPage: (value) => set({ currentPage: value }),
    }),
    // key : pagination-store
    {
      name: 'pagination-store',
    },
  ),
);
