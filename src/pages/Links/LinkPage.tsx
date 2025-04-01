import FolderTabsWithCreate from './components/folders/FolderTabsWithCreate';
import SearchLinkInput from './components/links/SearchLinkInput';
import { useModalStore } from '@store/useModalStore';
import Modal from '@components/common/Modal';

import { useEffect, useState } from 'react';
import { getAllLinks, getFolderLinks } from '@api/link/api';
import { useLinkStore } from '@store/useLinkStore';
import { useFolderStore } from '@store/useFolderStore';
import { useParams } from 'react-router-dom';

import { FolderControls } from './components/folders/FolderControls';
import { LinkGallery } from './components/links/LinkGallery';
import { LinkPagination } from './components/links/LinkPagination';
import AddLinkInput from './components/links/AddLinkInput';

const LinkPage: React.FC = () => {
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  const [totalLinkCount, setTotalLinkCount] = useState<number>(0);
  const { folderId } = useParams();

  useEffect(() => {
    const fetchAllLinks = async () => {
      const response = await getAllLinks({ page: 1, pageSize: 10 });
      setLinkList(response.list);
      setTotalLinkCount(response.totalCount);
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
        <FolderTabsWithCreate />
        <FolderControls />
        <LinkGallery />
        <LinkPagination totalLinkCount={totalLinkCount} />
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
export default LinkPage;
