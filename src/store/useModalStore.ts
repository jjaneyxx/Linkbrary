import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  title: string;
  buttonText: string;
  input: string;
  mode: string;
  setInput: (value: string) => void; // 해당 함수로 외부에서 store 값을 변경할 수 있음.
  onConfirm: (input: string) => void; // 모달 버튼 클릭 시 실행되는 함수
  openModal: (
    title: string,
    buttonText: string,
    onConfirm: (input: string) => void,
    mode: string,
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
  setInput: (value) => set({ input: value }),
  onConfirm: () => {}, // 기본값으로 비어있는 함수
  // modal 을 여는 동시에, 상태를 설정하는 함수
  openModal: (title, buttonText, onConfirm, mode) =>
    set({ isOpen: true, title, buttonText, onConfirm, mode }),
  // modal 이 닫힐 때 데이터 초기화
  closeModal: () =>
    set({ isOpen: false, title: '', buttonText: '', onConfirm: () => {}, input: '' }),
}));
