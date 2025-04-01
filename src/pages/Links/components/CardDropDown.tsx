import clsx from 'clsx';
import { useState } from 'react';

const CardDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const [isSelected, setIsSelected] = useState<string>('');

  const handleDropDownSelected = (value: string) => {
    setIsSelected(value);
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
