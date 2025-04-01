import clsx from 'clsx';
import { useState } from 'react';
import { useModalStore } from '../../../store/useModalStore';
import { deleteLink } from '../../../api/link/api';
import { useParams } from 'react-router-dom';

const CardDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const [isSelected, setIsSelected] = useState<string>('');
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const { linkId } = useParams();
  const linkIdNumber = Number(linkId);

  const handleDeleteLink = async () => {
    try {
      // test
      await deleteLink(linkIdNumber);
      alert('링크 삭제 성공');
      closeModal();
    } catch (error) {
      alert('링크 삭제 실패');
      console.log('error', error);
    }
  };

  const handleDropDownSelected = (value: string) => {
    setIsSelected(value);
    // 삭제하는 link 전달
    openModal('링크 삭제', '삭제하기', handleDeleteLink, 'delete');
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
