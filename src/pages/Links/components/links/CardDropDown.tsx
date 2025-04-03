import { deleteLink, putLink } from '@api/link/api';
import { useLinkStore } from '@store/useLinkStore';
import { useModalStore } from '@store/useModalStore';
import clsx from 'clsx';
import { useState } from 'react';

const CardDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const selectedLinkId = useLinkStore((state) => state.selectedLinkId);

  const [isSelected, setIsSelected] = useState<string>('');

  // delete link
  const handleDeleteLink = async () => {
    if (!selectedLinkId) return;

    try {
      await deleteLink(selectedLinkId);
      alert('링크 삭제 성공');
      closeModal();
    } catch (error) {
      alert('링크 삭제 실패');
      console.log('error', error);
    }
  };

  // put link
  const handlePutLink = async () => {
    if (!selectedLinkId) return;

    // brings recent input
    const modalLinkInput = useModalStore.getState().input;

    if (!modalLinkInput) {
      alert('유효한 링크를 입력하세요');
      return;
    }

    const linkData = {
      url: modalLinkInput,
    };

    // test
    try {
      const response = await putLink(selectedLinkId, linkData);
      console.log(response); // 수정된 링크 본문
      closeModal();
    } catch (error) {
      alert('링크 수정 실패');
      console.log('error', error);
    }
  };

  const handleDropDownSelected = (value: string) => {
    setIsSelected(value);
    if (value === 'delete') {
      openModal('링크 삭제', '삭제하기', handleDeleteLink, 'delete');
    } else if (value === 'edit') {
      openModal('링크 수정', '변경하기', handlePutLink);
    }
  };

  if (isDropDownOpen === false) {
    return null;
  }

  return (
    <ul className="absolute left-0 flex w-25 flex-col bg-white shadow-lg">
      <li
        className={clsx(
          'cursor-pointer px-3 py-[7px] text-[14px] hover:bg-[#E7EFFB]',
          isSelected === 'delete' && 'text-primary bg-[#E7EFFB]',
        )}
        onClick={(e) => {
          e.stopPropagation(); // prevent event bubbling
          handleDropDownSelected('delete');
        }}
      >
        삭제하기
      </li>
      <li
        className={clsx(
          'cursor-pointer px-3 py-[7px] text-[14px] hover:bg-[#E7EFFB]',
          isSelected === 'edit' && 'text-primary bg-[#E7EFFB]',
        )}
        onClick={(e) => {
          e.stopPropagation(); // prevent event bubbling
          handleDropDownSelected('edit');
        }}
      >
        수정하기
      </li>
    </ul>
  );
};
export default CardDropDown;
