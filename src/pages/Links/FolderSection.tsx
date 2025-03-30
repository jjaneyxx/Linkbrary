import FolderTabs from './FolderTabs';
import { useModalStore } from '../../store/useModalStore';

const FolderSection = () => {
  const openModal = useModalStore((state) => state.openModal);
  const handleOpenModal = () => {
    openModal('폴더 추가', '추가하기');
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

export default FolderSection;
