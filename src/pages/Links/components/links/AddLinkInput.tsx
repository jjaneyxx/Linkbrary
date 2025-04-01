import addLinkIcon from '@assets/icons/add-link.svg';
import Button from '@components/common/Button';
import { FormEvent, useState } from 'react';
import { useModalStore } from '@store/useModalStore';
import { postLink } from '@api/link/api';
import { useParams } from 'react-router-dom';
import { useLinkStore } from '@store/useLinkStore';

const AddLinkInput = () => {
  const [linkInput, setLinkInput] = useState<string>(''); // local
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const addLink = useLinkStore((state) => state.addLink);
  const { folderId } = useParams();

  const handlePostLink = async () => {
    // store 의 최신 상태 link 가져옴
    const modalLink = useModalStore.getState().linkInput;

    if (!folderId || !modalLink) {
      return;
    }

    const linkData = {
      url: modalLink,
      folderId: parseInt(folderId),
    };

    console.log('모달 데이터', linkData);

    try {
      const response = await postLink(linkData);
      console.log(response);
      addLink(response); // add link to linkList (global)
      closeModal();
      setLinkInput('');
      alert('링크 추가 성공');
    } catch (error) {
      console.log('링크 추가 실패', error);
    }
  };

  const handleAddLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlRegex = /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (linkInput === '' || !urlRegex.test(linkInput)) {
      alert('유효한 링크를 입력해주세요🔗');
      return;
    }

    openModal('폴더에 추가', '추가하기', handlePostLink, 'addLink', linkInput);
  };
  return (
    <form onSubmit={handleAddLink} className="bg-gray-100 lg:px-80 lg:pt-15 lg:pb-22.5">
      <div className="border-primary flex justify-between rounded-2xl border bg-white px-5 py-4">
        <div className="flex w-full items-center">
          <img src={addLinkIcon} alt="add link icon" className="mr-3 w-5" />
          <input
            placeholder="링크를 추가해 보세요"
            className="h-6 w-full leading-6 text-gray-400 outline-hidden"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
        </div>
        <Button className="w-[80px] py-2.5 text-[14px]" text="추가하기" />
      </div>
    </form>
  );
};
export default AddLinkInput;
