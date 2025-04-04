import { ErrorResponse } from '@api/axios';
import { deleteFolderById, putFolderById } from '@api/folder/api';
import deleteFolder from '@assets/icons/delete-folder.svg';
import renameFolder from '@assets/icons/rename-folder.svg';
import shareFolder from '@assets/icons/share-folder.svg';
import { useFolderStore } from '@store/useFolderStore';
import { useModalStore } from '@store/useModalStore';
import { AxiosError } from 'axios';

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
      alert('수정할 폴더 이름이 비어 있어요');
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
      alert('폴더 삭제 성공');
      closeModal();
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error('폴더 삭제 실패', axiosError.response?.data.name);

      const errorName = axiosError.response?.data.name;
      if (errorName === 'PrismaClientKnownRequestError') {
        alert('폴더 안 링크를 먼저 삭제해주세요');
        closeModal();
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
      alert('🙏 아직 준비 중인 기능입니다');
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
