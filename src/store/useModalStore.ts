import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  title: string;
  buttonText: string;
  input: string;
  mode: string;
  linkInput?: string; // 링크 추가 시 입력된 링크
  setInput: (value: string) => void;
  onConfirm: (input: string) => void;

  openModal: (
    title: string,
    buttonText: string,
    onConfirm: (input: string) => void,
    mode?: string,
    linkInput?: string,
  ) => void;
  closeModal: () => void;
}

// create 함수로 상태를 저장하는 store 정의
export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  buttonText: '',
  input: '',
  mode: '',
  linkInput: '',
  setInput: (value) => set({ input: value }),
  onConfirm: () => {}, // 기본값으로 비어있는 함수
  openModal: (title, buttonText, onConfirm, mode, linkInput) =>
    set({ isOpen: true, title, buttonText, onConfirm, mode, linkInput }),
  closeModal: () =>
    set({
      isOpen: false,
      title: '',
      buttonText: '',
      onConfirm: () => {},
      input: '',
      mode: '',
      linkInput: '',
    }),
}));
