import { LinkResponse } from '@api/link/api';
import kebap from '@assets/icons/link-kebap.svg';
import fallBackImage from '@assets/images/card-fallback.svg';
import { useLinkStore } from '@store/useLinkStore';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import CardDropDown from './CardDropDown';

type CardProps = {
  link: LinkResponse;
  onClick: () => void;
};

const Card = ({ link, onClick }: CardProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const setSelectedLinkId = useLinkStore((state) => state.setSelectedLinkId);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleDropDown = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedLinkId(link.id);
    setIsDropDownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: CustomEvent<MouseEvent>) => {
      // dropdown menu 가 있고, 클릭된 요소가 dropdown menu 의 내부가 아닐 경우
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    // cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
    };
  }, []);

  return (
    <div
      className="flex h-[334px] w-full cursor-pointer flex-col rounded-[15px] shadow-lg transition duration-200 ease-out hover:scale-105"
      onClick={onClick}
    >
      {/* link image*/}
      <div className="h-[200px] rounded-t-[15px]">
        <img
          src={link.imageSource || fallBackImage}
          alt={link.title}
          className="max-h-[200px] w-full rounded-t-[15px] object-cover"
        />
        <div>{link.favorite}</div>
      </div>
      {/*link info*/}
      <div className="flex flex-1 flex-col rounded-b-[15px] px-5 py-[15px]">
        <div className="mb-2.5 flex justify-between">
          <div className="overflow-hidden whitespace-nowrap">{link.title}</div>
          <div className="ml-5 shrink-0" ref={dropDownRef}>
            <button className="relative cursor-pointer" onClick={handleDropDown}>
              <img src={kebap} alt="kepab button" />
              {isDropDownOpen && <CardDropDown isDropDownOpen={isDropDownOpen} />}
            </button>
          </div>
        </div>
        <div className="line-clamp-2 min-h-[3rem]">{link.description}</div>
        <div className="mt-1">{link.createdAt.split('T')[0]}</div>
      </div>
    </div>
  );
};
export default Card;
