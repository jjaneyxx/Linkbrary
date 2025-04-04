import { ErrorResponse } from '@api/axios';
import { deleteFolderById, putFolderById } from '@api/folder/api';
import deleteFolder from '@assets/icons/delete-folder.svg';
import renameFolder from '@assets/icons/rename-folder.svg';
import shareFolder from '@assets/icons/share-folder.svg';
import { useFolderStore } from '@store/useFolderStore';
import { useModalStore } from '@store/useModalStore';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const FolderControls = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedFolderId = useFolderStore((state) => state.setSelectedFolderId);
  const folders = useFolderStore((state) => state.folders);
  const fetchFolders = useFolderStore((state) => state.fetchFolders);

  // get folder name from folder id
  const selectedFolderName = folders.find((folder) => folder.id === selectedFolderId)?.name ?? '';
  // remove component from DOM
  if (selectedFolderId === null) return null;

  // rename folder
  const handlePutFolder = async (input: string) => {
    if (input === '') {
      toast.error('수정할 폴더 이름이 비어 있어요');
      return;
    }
    if (!selectedFolderId) return;

    const folderData = {
      name: input,
    };

    try {
      const response = await putFolderById(selectedFolderId, folderData);
      setSelectedFolderId(response.id);
      fetchFolders();
      closeModal();
    } catch (error) {
      console.error('폴더 수정 실패', error);
    }
  };

  // delete folder
  const handleDeleteFolder = async () => {
    if (!selectedFolderId) return;

    try {
      await deleteFolderById(selectedFolderId);
      fetchFolders();
      toast.success('폴더가 삭제되었습니다.');
      closeModal();
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorName = axiosError.response?.data.name;
      if (errorName === 'PrismaClientKnownRequestError') {
        toast.error('폴더 안에 링크가 있어 삭제할 수 없습니다.');
        closeModal();
      } else {
        toast.error('폴더 삭제에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  // open modal
  const handleOpenModal = (mode: string) => {
    if (mode === 'rename') {
      openModal('폴더 변경', '변경하기', handlePutFolder, mode);
    } else if (mode === 'delete') {
      openModal('폴더 삭제', '삭제하기', handleDeleteFolder, mode);
    } else if (mode === 'share') {
      toast.error('🙏 아직 준비 중인 기능입니다');
    }
  };

  return (
    <div className="mt-6 flex justify-between">
      <div className="text-2xl font-semibold">{selectedFolderName}</div>
      <div className="flex gap-3">
        <button className="cursor-pointer" onClick={() => handleOpenModal('share')}>
          <img src={shareFolder} />
        </button>
        <button className="cursor-pointer" onClick={() => handleOpenModal('rename')}>
          <img src={renameFolder} />
        </button>
        <button className="cursor-pointer">
          <img src={deleteFolder} onClick={() => handleOpenModal('delete')} />
        </button>
      </div>
    </div>
  );
};
