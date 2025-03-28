import { FormEvent } from 'react';
import searchLink from '../../assets/icons/search-link.svg';

const SearchLinkInput = () => {
  const handleSearchLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('search link');
  };
  return (
    <form onSubmit={handleSearchLink} className="lg:px-[190px] mt-10">
      {/*검색 박스*/}
      <div className="flex px-4 py-[15px] rounded-[10px]  bg-[#F5F5F5] ">
        {/*icon, input*/}
        <div className="flex items-center w-full">
          <img src={searchLink} alt="search" className="w-5 mr-3" />
          <input
            placeholder="링크를 검색해보세요"
            className="text-[#666666] leading-6 h-6 outline-hidden w-full"
          />
        </div>
      </div>
    </form>
  );
};
export default SearchLinkInput;
