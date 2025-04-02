import leftArrow from '@assets/icons/left-arrow.svg';
import page1 from '@assets/icons/pagination/page-1.svg';
import page2 from '@assets/icons/pagination/page-2.svg';
import page3 from '@assets/icons/pagination/page-3.svg';
import page4 from '@assets/icons/pagination/page-4.svg';
import page5 from '@assets/icons/pagination/page-5.svg';
import page6 from '@assets/icons/pagination/page-6.svg';
import page7 from '@assets/icons/pagination/page-7.svg';
import page8 from '@assets/icons/pagination/page-8.svg';
import page9 from '@assets/icons/pagination/page-9.svg';
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
        <img src={page2} />
      </button>
      <button>
        <img src={page3} />
      </button>
      <button>
        <img src={page4} />
      </button>
      <button>
        <img src={page5} />
      </button>
      <button>
        <img src={page6} />
      </button>
      <button>
        <img src={page7} />
      </button>
      <button>
        <img src={page8} />
      </button>
      <button>
        <img src={page9} />
      </button>
      <button>
        <img src={rightArrow} className="ml-2.5 cursor-pointer" />
      </button>
    </div>
  );
};
