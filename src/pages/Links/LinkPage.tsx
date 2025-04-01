import Modal from '@components/common/Modal';
import { useModalStore } from '@store/useModalStore';
import FolderTabsWithCreate from './components/folders/FolderTabsWithCreate';
import SearchLinkInput from './components/links/SearchLinkInput';

import { getAllLinks } from '@api/link/api';
import { useLinkStore } from '@store/useLinkStore';
import { useEffect, useState } from 'react';

import { useFolderStore } from '@store/useFolderStore';
import { FolderControls } from './components/folders/FolderControls';
import AddLinkInput from './components/links/AddLinkInput';
import { LinkGallery } from './components/links/LinkGallery';
import { LinkPagination } from './components/links/LinkPagination';

const LinkPage: React.FC = () => {
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const [totalLinkCount, setTotalLinkCount] = useState<number>(0);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);

  useEffect(() => {
    if (selectedFolderId === null) {
      const fetchAllLinks = async () => {
        const response = await getAllLinks({ page: 1, pageSize: 10 });
        setLinkList(response.list);
        setTotalLinkCount(response.totalCount);
      };
      fetchAllLinks();
    }
  }, [selectedFolderId === null]);

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
