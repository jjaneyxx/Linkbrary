import AddLinkInput from './AddLinkInput';
import FolderSection from './FolderSection';
import SearchLinkInput from './SearchLinkInput';
import { useModalStore } from '../../store/useModalStore';
import Modal from '../../components/common/Modal';
import { FolderAction } from './FolderAction';

const LinkPage: React.FC = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  return (
    <div>
      <AddLinkInput />
      <div className="lg:px-[190px]">
        <SearchLinkInput />
        <FolderSection />
        <FolderAction />
      </div>
      {isOpen && <Modal children="폴더 추가" />}
    </div>
  );
};
export default LinkPage;
