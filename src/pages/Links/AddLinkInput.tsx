import addLink from '../../assets/icons/add-link.svg';
import Button from '../../components/common/Button';
import { FormEvent } from 'react';

const AddLinkInput = () => {
  const handleAddLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // postLink API
    // folder X > modal : folder 추가
    // folder O > url, folderId 받아서 링크 생성
    console.log('add link');
  };
  return (
    <form onSubmit={handleAddLink} className="bg-gray-100 lg:px-80 lg:pt-15 lg:pb-22.5">
      <div className="border-primary flex justify-between rounded-2xl border bg-white px-5 py-4">
        <div className="flex w-full items-center">
          <img src={addLink} alt="add link icon" className="mr-3 w-5" />
          <input
            placeholder="링크를 추가해 보세요"
            className="h-6 w-full leading-6 text-gray-400 outline-hidden"
          />
        </div>
        <Button className="w-[80px] py-2.5 text-[14px]" text="추가하기" />
      </div>
    </form>
  );
};
export default AddLinkInput;
