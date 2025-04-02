import Modal from '@components/common/Modal';
import { useModalStore } from '@store/useModalStore';
import FolderTabsWithCreate from './components/folders/FolderTabsWithCreate';
import SearchLinkInput from './components/links/SearchLinkInput';

import { getAllLinks } from '@api/link/api';
import { useLinkStore } from '@store/useLinkStore';
import { useEffect } from 'react';

import { useFolderStore } from '@store/useFolderStore';
import { usePaginationStore } from '@store/usePaginationStore';
import { FolderControls } from './components/folders/FolderControls';
import AddLinkInput from './components/links/AddLinkInput';
import { LinkGallery } from './components/links/LinkGallery';
import { LinkPagination } from './components/links/LinkPagination';

const LinkPage: React.FC = () => {
  const currentLinkList = useLinkStore.getState().linkList;
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setTotalLinkCount = usePaginationStore((state) => state.setTotalCount);

  // fetch all links
  useEffect(() => {
    if (selectedFolderId === null) {
      const fetchAllLinks = async () => {
        const response = await getAllLinks({ page: 1, pageSize: 9 });
        setLinkList(response.list);
        setTotalLinkCount(response.totalCount); // store
      };
      fetchAllLinks();
    }
  }, [selectedFolderId === null]);

  console.log('currentLinkList', currentLinkList);

  const isOpen = useModalStore((state) => state.isOpen);
  return (
    <div>
      <AddLinkInput />
      <div className="mx-auto max-w-[1440px] lg:px-[190px]">
        <SearchLinkInput />
        <FolderTabsWithCreate />
        <FolderControls />
        <LinkGallery />
        <LinkPagination />
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
export default LinkPage;
