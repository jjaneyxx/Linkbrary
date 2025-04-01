import clsx from 'clsx';
import { useState } from 'react';
import { useModalStore } from '@store/useModalStore';
import { deleteLink, putLink } from '@api/link/api';
import { useParams } from 'react-router-dom';

const CardDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const [isSelected, setIsSelected] = useState<string>('');
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const { linkId } = useParams();
  const linkIdNumber = Number(linkId);

  const handleDeleteLink = async () => {
    try {
      await deleteLink(linkIdNumber);
      alert('링크 삭제 성공');
      closeModal();
    } catch (error) {
      alert('링크 삭제 실패');
      console.log('error', error);
    }
  };

  const handlePutLink = async () => {
    // brings recent input
    const modalLinkInput = useModalStore.getState().input;
    console.log(modalLinkInput);
    if (!modalLinkInput) {
      alert('유효한 링크를 입력하세요');
      return;
    }

    // input 에 입력된 link
    const linkData = {
      url: modalLinkInput,
    };

    // test
    try {
      const response = await putLink(linkIdNumber, linkData);
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
    <ul className="absolute left-0 flex w-25 flex-col border bg-white">
      <li
        className={clsx(
          'cursor-pointer px-3 py-[7px] text-[14px]',
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
          'cursor-pointer px-3 py-[7px] text-[14px]',
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
