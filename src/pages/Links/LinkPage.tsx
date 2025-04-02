import Modal from '@components/common/Modal';
import { useModalStore } from '@store/useModalStore';
import FolderTabsWithCreate from './components/folders/FolderTabsWithCreate';
import SearchLinkInput from './components/links/SearchLinkInput';

import { getAllLinks } from '@api/link/api';
import { useLinkStore } from '@store/useLinkStore';
import { useEffect } from 'react';

import { useFolderStore } from '@store/useFolderStore';
import { usePaginationStore } from '@store/usePaginationStore';
import { useSearchParams } from 'react-router-dom';
import { FolderControls } from './components/folders/FolderControls';
import AddLinkInput from './components/links/AddLinkInput';
import { LinkGallery } from './components/links/LinkGallery';
import { LinkPagination } from './components/links/LinkPagination';

const LinkPage: React.FC = () => {
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setTotalLinkCount = usePaginationStore((state) => state.setTotalCount);
  const [searchParams] = useSearchParams();

  // fetch all links
  useEffect(() => {
    if (selectedFolderId !== null) return;

    const pageParam = searchParams.get('page');
    const currentPage = !pageParam ? 1 : parseInt(pageParam);
    console.log('currentPage', currentPage);

    const fetchAllLinks = async () => {
      const response = await getAllLinks({ page: currentPage, pageSize: 9 });
      setLinkList(response.list);
      setTotalLinkCount(response.totalCount); // store
    };
    fetchAllLinks();
  }, [searchParams]);

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
