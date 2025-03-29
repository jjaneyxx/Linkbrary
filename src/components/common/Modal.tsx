import { useModalStore } from '../../store/useModalStore';
import Button from './Button';
import closeModal from '../../assets/icons/close-modal.svg';
import { MouseEvent } from 'react';

const Modal = () => {
  const handleModalClose = useModalStore((state) => state.closeModal);

  const preventEventBubbling = (e: MouseEvent<HTMLDivElement>) => {
    // event bubbling 방지
    e.stopPropagation();
  };

  return (
    <div
      className="onClick={handleModalClose} fixed inset-0 z-40 bg-black/50"
      onClick={handleModalClose}
    >
      {/* Modal */}
      <div
        onClick={preventEventBubbling}
        className="absolute top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-[15px] border border-[#CCD5E3] bg-white px-10 py-8"
      >
        <div className="relative flex flex-col items-center">
          <span className="rounded-lg px-[15px] py-[18px] text-xl leading-1 font-bold text-[#373740]">
            폴더 추가
          </span>
          <input
            placeholder="내용 입력"
            className="mt-4 mb-[15px] h-15 w-[280px] rounded-md border border-[#CCD5E3] px-[15px] py-[18px] focus:outline-none"
          />
          <Button className="h-[51px] w-[280px]" text="변경하기" type="submit" />
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
