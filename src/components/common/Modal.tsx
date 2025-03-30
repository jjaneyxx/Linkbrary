import { useModalStore } from '../../store/useModalStore';
import Button from './Button';
import closeModal from '../../assets/icons/close-modal.svg';
import { ChangeEvent, MouseEvent } from 'react';
import { useFolderStore } from '../../store/useFolderStore';
import { clsx } from 'clsx';

const Modal = () => {
  const handleModalClose = useModalStore((state) => state.closeModal);
  const modalTitle = useModalStore((state) => state.title);
  const modalButtonText = useModalStore((state) => state.buttonText);
  const modalInput = useModalStore((state) => state.input);
  const setModalInput = useModalStore((state) => state.setInput);
  const modalOnConfirm = useModalStore((state) => state.onConfirm);
  const modalMode = useModalStore((state) => state.mode);
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  // modalMode 가 'delete' 이면 input 대신 폴더 이름이 와야함.

  const preventEventBubbling = (e: MouseEvent<HTMLDivElement>) => {
    // event bubbling 방지
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/50" onClick={handleModalClose}>
      {/* Modal */}
      <div
        onClick={preventEventBubbling}
        className="absolute top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-[15px] border border-[#CCD5E3] bg-white px-10 py-8"
      >
        <div className="relative flex flex-col items-center">
          <span className="rounded-lg px-[15px] py-[18px] text-xl leading-1 font-bold text-[#373740]">
            {modalTitle}
          </span>

          {modalMode === 'delete' ? (
            <div className="mb-6">{selectedFolder}</div>
          ) : (
            <input
              placeholder="내용 입력"
              className="mt-4 mb-[15px] h-15 w-[280px] rounded-md border border-[#CCD5E3] px-[15px] py-[18px] focus:outline-none"
              value={modalInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setModalInput(e.target.value);
              }}
            />
          )}

          <Button
            className={clsx(
              'h-[51px] w-[280px]',
              modalMode === 'delete' ? 'bg-red' : 'bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE]',
            )}
            text={modalButtonText}
            type="submit"
            onClick={() => {
              modalOnConfirm(modalInput);
            }}
          />
          {/*close button*/}
          <button className="absolute -top-4 -right-6">
            <img
              src={closeModal}
              alt="close modal"
              className="w-6 cursor-pointer"
              onClick={handleModalClose}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
