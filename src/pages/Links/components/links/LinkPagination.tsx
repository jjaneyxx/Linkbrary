import leftArrow from '@assets/icons/left-arrow.svg';
import rightArrow from '@assets/icons/right-arrow.svg';
import { useFolderStore } from '@store/useFolderStore';
import { usePaginationStore } from '@store/usePaginationStore';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export const LinkPagination = () => {
  const totalLinkCount = usePaginationStore((state) => state.totalCount);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const navigate = useNavigate();

  const maxPageNumber =
    totalLinkCount % 9 === 0 ? Math.floor(totalLinkCount / 9) : Math.floor(totalLinkCount / 9) + 1;
  const pageNumberList = Array.from({ length: maxPageNumber }, (_, i) => i + 1);

  console.log('totalLinkCount', totalLinkCount);
  console.log('maxPageNumber', maxPageNumber);

  // click pagination number
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // store

    // add query string
    const params = new URLSearchParams();
    params.set('page', pageNumber.toString());
    params.set('pageSize', '9');
    console.log('selectedFolderId', selectedFolderId);
    navigate(`?folder=${selectedFolderId}&${params.toString()}`);
  };

  return (
    <div className="mt-10 flex justify-center gap-1">
      <button className={clsx('mr-2.5 cursor-pointer', currentPage === 1 && 'hidden')}>
        <img src={leftArrow} />
      </button>

      {pageNumberList.map((pageNumber) => (
        <button
          key={pageNumber}
          className="cursor-pointer"
          onClick={() => handlePageChange(pageNumber)}
        >
          {/* insert svg icon */}
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="8" fill="#F7F7F7" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill={currentPage === pageNumber ? '#000000' : '#C4C4C4'}
              fontSize="18"
              fontFamily="Arial, sans-serif"
              dy=".3em"
            >
              {pageNumber}
            </text>
          </svg>
        </button>
      ))}

      <button className={clsx('ml-2.5 cursor-pointer', currentPage === maxPageNumber && 'hidden')}>
        <img src={rightArrow} />
      </button>
    </div>
  );
};
