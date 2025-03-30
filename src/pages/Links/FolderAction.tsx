import shareFolder from '../../assets/icons/share-folder.svg';
import renameFolder from '../../assets/icons/rename-folder.svg';
import deleteFolder from '../../assets/icons/delete-folder.svg';
import { useModalStore } from '../../store/useModalStore';
import { useFolderStore } from '../../store/useFolderStore';
import { deleteFolderById, putFolderById } from '../../api/folder/api';
import { useParams } from 'react-router-dom';

export const FolderAction = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  const setSelectedFolder = useFolderStore((state) => state.setSelectedFolder);
  const { folderId } = useParams(); // get folderId from path

  // rename folder
  const handlePutFolder = async (input: string) => {
    if (input === '' || !folderId) return;

    const folderData = {
      name: input,
    };

    try {
      const response = await putFolderById(parseInt(folderId), folderData);
      setSelectedFolder(response.name);
      closeModal();
    } catch (error) {
      console.log('폴더 수정 실패', error);
    }
  };

  // delete folder
  const handleDeleteFolder = async () => {
    if (!folderId) return;

    try {
      await deleteFolderById(parseInt(folderId));
      alert('폴더 삭제 성공');
      closeModal();
    } catch (error) {
      console.log('폴더 삭제 실패', error);
    }
  };

  const handleOpenModal = (mode: string) => {
    if (mode === 'rename') {
      openModal('폴더 변경', '변경하기', handlePutFolder, mode);
    } else if (mode === 'delete') {
      openModal('폴더 삭제', '삭제하기', handleDeleteFolder, mode);
    } else if (mode === 'share') {
      // openModal('폴더 공유', '', handleShareFolder, mode)
    }
  };

  return (
    <div className="mt-6 flex justify-between">
      <div>{selectedFolder}</div>
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
