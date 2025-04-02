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

export const LinkPagination = () => {
  const totalLinkCount = usePaginationStore((state) => state.totalCount);

  const maxPageNumber =
    totalLinkCount % 9 === 0 ? Math.floor(totalLinkCount / 9) : Math.floor(totalLinkCount / 9) + 1;

  const pageNumberList = Array.from({ length: maxPageNumber }, (_, i) => i + 1);
  const pageNumberIcons = [page1, page2, page3, page4, page5, page6, page7, page8, page9];

  return (
    <div className="mt-10 flex justify-center gap-1">
      <button>
        <img src={leftArrow} className="mr-2.5 cursor-pointer" />
      </button>
      {pageNumberList.map((pageNumber) => (
        <button key={pageNumber}>
          <img src={pageNumberIcons[pageNumber - 1]} alt="pagination number" />
        </button>
      ))}

      <button>
        <img src={rightArrow} className="ml-2.5 cursor-pointer" />
      </button>
    </div>
  );
};
