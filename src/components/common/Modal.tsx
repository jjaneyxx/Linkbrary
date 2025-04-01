import closeModal from '@assets/icons/close-modal.svg';
import { useFolderStore } from '@store/useFolderStore';
import { useModalStore } from '@store/useModalStore';
import clsx from 'clsx';
import { ChangeEvent, MouseEvent } from 'react';
import Button from './Button';

const Modal = () => {
  const handleModalClose = useModalStore((state) => state.closeModal);
  const modalTitle = useModalStore((state) => state.title);
  const modalButtonText = useModalStore((state) => state.buttonText);
  const modalInput = useModalStore((state) => state.input);
  const setModalInput = useModalStore((state) => state.setInput);
  const modalOnConfirm = useModalStore((state) => state.onConfirm);
  const modalMode = useModalStore((state) => state.mode);
  const modalLink = useModalStore((state) => state.linkInput);
  const folders = useFolderStore((state) => state.folders);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedFolderId = useFolderStore((state) => state.setSelectedFolderId);
  // get folder name from folder id
  const selectedFolderName = folders.find((folder) => folder.id === selectedFolderId)?.name ?? '';

  const preventEventBubbling = (e: MouseEvent<HTMLDivElement>) => {
    // event bubbling 방지
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/50" onClick={handleModalClose}>
      {/* Modal */}
      <div
        onClick={preventEventBubbling}
        className="absolute top-1/2 left-1/2 z-50 flex w-[360px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-[15px] border border-[#CCD5E3] bg-white px-10 py-8"
      >
        <div className="relative flex flex-col items-center">
          <span className="rounded-lg px-[15px] py-[18px] text-xl leading-1 font-bold text-[#373740]">
            {modalTitle}
          </span>

          {/* 링크 추가 */}
          {modalMode === 'addLink' && (
            <div>
              <div className="mb-6">{modalLink}</div>
              <div className="mb-6 flex flex-col gap-0.5">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    children={folder.name}
                    onClick={() => setSelectedFolderId(folder.id)}
                    className={clsx(
                      'p-2',
                      selectedFolderId === folder.id &&
                        'text-primary cursor-pointer rounded-lg bg-[#F0F6FF]',
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 폴더 삭제 */}
          {modalMode === 'delete' && <div className="mb-6">{selectedFolderName}</div>}

          {modalMode !== 'delete' && modalMode !== 'addLink' && (
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
            className={'h-[51px] w-[280px]'}
            text={modalButtonText}
            type="submit"
            modalMode={modalMode}
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
