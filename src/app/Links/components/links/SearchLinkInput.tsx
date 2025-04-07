import searchLink from '@assets/icons/search-link.svg';
import { FormEvent } from 'react';

const SearchLinkInput = () => {
  const handleSearchLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSearchLink} className="mt-10">
      {/*검색 박스*/}
      <div className="flex rounded-[10px] bg-[#F5F5F5] px-4 py-[15px]">
        {/*icon, input*/}
        <div className="flex w-full items-center">
          <img src={searchLink} alt="search" className="mr-3 w-5" />
          <input
            placeholder="링크를 검색해보세요"
            className="h-6 w-full leading-6 text-[#666666] outline-hidden"
          />
        </div>
      </div>
    </form>
  );
};
export default SearchLinkInput;
