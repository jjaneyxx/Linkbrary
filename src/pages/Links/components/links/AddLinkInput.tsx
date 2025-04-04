import { postLink } from '@api/link/api';
import addLinkIcon from '@assets/icons/add-link.svg';
import Button from '@components/common/Button';
import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { useModalStore } from '@store/useModalStore';
import { usePaginationStore } from '@store/usePaginationStore';
import { FormEvent, useState } from 'react';

const AddLinkInput = () => {
  const [linkInput, setLinkInput] = useState<string>(''); // local
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const folders = useFolderStore.getState().folders;
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const fetchAllLinks = useLinkStore((state) => state.fetchAllLinks);
  const fetchFolderLinks = useLinkStore((state) => state.fetchFolderLinks);

  const handlePostLink = async () => {
    // get recent state of linkInput, selectedFolderId from modal store
    const modalLink = useModalStore.getState().linkInput;
    const modalSelectedFolderId = useModalStore.getState().modalSelectedFolderId;
    const currentPage = usePaginationStore.getState().currentPage;

    if (!modalSelectedFolderId || !modalLink) return;

    const linkData = {
      url: modalLink,
      folderId: modalSelectedFolderId,
    };

    try {
      await postLink(linkData);

      if (selectedFolderId) {
        fetchFolderLinks(selectedFolderId, currentPage);
      } else {
        fetchAllLinks(currentPage);
      }
      alert('링크 추가 성공');
      setLinkInput('');
      closeModal();
    } catch (error) {
      console.error('링크 추가 실패', error);
    }
  };

  const handleAddLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (linkInput === '') {
      alert('링크를 입력해주세요 🙋‍♂️');
      return;
    }

    if (folders.length === 0) {
      alert('폴더를 먼저 만들어주세요 📁');
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
