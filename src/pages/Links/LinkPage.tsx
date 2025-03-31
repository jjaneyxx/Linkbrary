import AddLinkInput from './AddLinkInput';
import FolderTabsMenu from './FolderTabsMenu';
import SearchLinkInput from './SearchLinkInput';
import { useModalStore } from '../../store/useModalStore';
import Modal from '../../components/common/Modal';
import { FolderAction } from './FolderAction';
import LinkCardsSection from './LinkCardsSection';

const LinkPage: React.FC = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  return (
    <div>
      <AddLinkInput />
      <div className="mx-auto max-w-[1440px] lg:px-[190px]">
        <SearchLinkInput />
        <FolderTabsMenu />
        <FolderAction />
        <LinkCardsSection />
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
export default LinkPage;
