import shareFolder from '../../assets/icons/share-folder.svg';
import renameFolder from '../../assets/icons/rename-folder.svg';
import deleteFolder from '../../assets/icons/delete-folder.svg';
import { useModalStore } from '../../store/useModalStore';

export const FolderAction = () => {
  const openModal = useModalStore((state) => state.openModal);
  const handleOpenModal = () => {
    openModal('폴더 변경', '변경하기');
  };
  return (
    <div className="mt-6 flex justify-between">
      <div>폴더 이름</div>
      <div className="flex gap-3">
        <button className="cursor-pointer">
          <img src={shareFolder} />
        </button>
        <button className="cursor-pointer" onClick={handleOpenModal}>
          <img src={renameFolder} />
        </button>
        <button className="cursor-pointer">
          <img src={deleteFolder} />
        </button>
      </div>
    </div>
  );
};
