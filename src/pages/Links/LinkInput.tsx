import addLink from '../../assets/icons/add-link.svg';
import Button from '../../components/common/Button';
import { FormEvent } from 'react';

const LinkInput = () => {
  const handleAddLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // postLink API
    // folder X > modal : folder 추가
    // folder O > url, folderId 받아서 링크 생성
    console.log('add link');
  };
  return (
    <form onSubmit={handleAddLink} className="bg-gray-100 lg:px-80 lg:pt-15 lg:pb-22.5">
      <div className="flex justify-between border py-4 px-5 rounded-2xl border-primary bg-white ">
        <div className="flex items-center">
          <img src={addLink} alt="add link icon" className="w-5 mr-3" />
          <input
            placeholder="링크를 추가해 보세요"
            className="text-gray-400 leading-6 h-6 outline-hidden"
          />
        </div>
        <Button className="w-[80px] text-[14px] py-2.5" text="추가하기" />
      </div>
    </form>
  );
};
export default LinkInput;
