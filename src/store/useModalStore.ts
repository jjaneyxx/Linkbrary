import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  title: string;
  buttonText: string;
  openModal: (title: string, buttonText: string) => void;
  closeModal: () => void;
}

// create 함수로 상태를 저장하는 store 정의
export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  buttonText: '',
  openModal: (title, buttonText) => set({ isOpen: true, title, buttonText }),
  // modal 이 닫힐 때 데이터 초기화
  closeModal: () => set({ isOpen: false, title: '', buttonText: '' }),
}));
