import { postFolder } from '@api/folder/api';
import { useFolderStore } from '@store/useFolderStore';
import { useModalStore } from '@store/useModalStore';
import axios from 'axios';
import toast from 'react-hot-toast';
import FolderTabs from './FolderTabs';

const FolderTabsWithCreate = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const fetchFolders = useFolderStore((state) => state.fetchFolders);
  const setLoading = useModalStore((state) => state.setLoading);

  const handlePostFolder = async (input: string) => {
    if (input === '') return;

    const folderData = {
      name: input,
    };

    try {
      setLoading(true);

      await postFolder(folderData);
      fetchFolders();
      toast.success('폴더가 추가되었습니다.');
      closeModal();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('응답 : ', error.response.data);
      }
      toast.error('폴더 추가에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
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
