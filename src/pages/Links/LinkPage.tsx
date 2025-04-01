import AddLinkInput from './AddLinkInput';
import FolderTabsMenu from './FolderTabsMenu';
import SearchLinkInput from './SearchLinkInput';
import { useModalStore } from '../../store/useModalStore';
import Modal from '../../components/common/Modal';
import { FolderAction } from './FolderAction';
import LinkCardsSection from './LinkCardsSection';
import { useEffect } from 'react';
import { getAllLinks, getFolderLinks } from '../../api/link/api';
import { useLinkStore } from '../../store/useLinkStore';
import { useFolderStore } from '../../store/useFolderStore';
import { useParams } from 'react-router-dom';

const LinkPage: React.FC = () => {
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  const { folderId } = useParams();

  useEffect(() => {
    const fetchAllLinks = async () => {
      const response = await getAllLinks({ page: 1, pageSize: 10 });
      console.log('all links', response.list);
      setLinkList(response.list);
    };
    fetchAllLinks();
  }, []);

  useEffect(() => {
    const fetchFolderLinks = async () => {
      if (!folderId) {
        return;
      }

      const response = await getFolderLinks({
        folderId: parseInt(folderId),
        page: 1,
        pageSize: 10,
      });

      setLinkList(response.list);
    };
    fetchFolderLinks();
  }, [selectedFolder]);

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
