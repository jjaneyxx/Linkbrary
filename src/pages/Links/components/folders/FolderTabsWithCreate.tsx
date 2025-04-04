import { postFolder } from '@api/folder/api';
import { useFolderStore } from '@store/useFolderStore';
import { useModalStore } from '@store/useModalStore';
import axios from 'axios';
import FolderTabs from './FolderTabs';

const FolderTabsWithCreate = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const fetchFolders = useFolderStore((state) => state.fetchFolders);

  const handlePostFolder = async (input: string) => {
    if (input === '') return;

    const folderData = {
      name: input,
    };

    try {
      const response = await postFolder(folderData);
      console.log('created folder', response);
      fetchFolders();
      alert('폴더 추가 성공');
      closeModal();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('응답 : ', error.response.data);
      }
      alert('폴더 추가 실패');
    }
  };

  const handleOpenModal = () => {
    openModal('폴더 추가', '추가하기', handlePostFolder, 'add');
  };

  return (
    <div className="mt-10 flex justify-between">
      <FolderTabs />
      <button
        className="text-primary cursor-pointer leading-none font-medium"
        onClick={handleOpenModal}
      >
        폴더 추가 +{' '}
      </button>
    </div>
  );
};

export default FolderTabsWithCreate;
