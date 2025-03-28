import AddLinkInput from './AddLinkInput';
import FolderSection from './FolderSection';
import SearchLinkInput from './SearchLinkInput';
import { useModalStore } from '../../store/useModalStore';
import Modal from '../../components/common/Modal';

const LinkPage: React.FC = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  return (
    <div>
      <AddLinkInput />
      <div className="lg:px-[190px]">
        <SearchLinkInput />
        <FolderSection />
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
export default LinkPage;
