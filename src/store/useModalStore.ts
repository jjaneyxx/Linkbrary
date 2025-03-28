import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// create 함수로 상태를 저장하는 store 정의
export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
