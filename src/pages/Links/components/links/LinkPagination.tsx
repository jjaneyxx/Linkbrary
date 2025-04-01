import leftArrow from '@assets/icons/left-arrow.svg';
import page1 from '@assets/icons/pagination-1.svg';
import rightArrow from '@assets/icons/right-arrow.svg';
import { useEffect } from 'react';

type PaginationProps = {
  totalLinkCount: number;
};

// totalLinkCount / 10 = 0 -> page 1
// totalLinkCount / 10 = 1 -> page 2

export const LinkPagination = ({ totalLinkCount }: PaginationProps) => {
  useEffect(() => {
    const pageNumber = Math.floor(totalLinkCount / 10) + 1;
    console.log(pageNumber);
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
