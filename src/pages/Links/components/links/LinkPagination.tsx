import leftArrow from '@assets/icons/left-arrow.svg';
import page1 from '@assets/icons/pagination-1.svg';
import rightArrow from '@assets/icons/right-arrow.svg';
import { usePaginationStore } from '@store/usePaginationStore';
import { useEffect } from 'react';

export const LinkPagination = () => {
  const totalLinkCount = usePaginationStore((state) => state.totalCount);
  useEffect(() => {
    const maxPageNumber = Math.floor(totalLinkCount / 10) + 1;
    console.log('maxPageNumber', maxPageNumber);
    // maxPageNumber 에 따라 페이지 번호 렌더링
  });

  return (
    <div className="mt-10 flex justify-center gap-1">
      <button>
        <img src={leftArrow} className="mr-2.5 cursor-pointer" />
      </button>
      <button>
        <img src={page1} />
      </button>
      <button>
        <img src={rightArrow} className="ml-2.5 cursor-pointer" />
      </button>
    </div>
  );
};
