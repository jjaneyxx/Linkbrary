import AddLinkInput from './AddLinkInput';
import FolderTabsMenu from './FolderTabsMenu';
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
        <FolderTabsMenu />
        <FolderAction />
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
export default LinkPage;
