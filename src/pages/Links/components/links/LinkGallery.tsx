import { getFolderLinks } from '@api/link/api';
import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { usePaginationStore } from '@store/usePaginationStore';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from './Card';

export const LinkGallery = () => {
  const linkList = useLinkStore((state) => state.linkList);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const setSelectedLinkId = useLinkStore((state) => state.setSelectedLinkId);
  const setTotalLinkCount = usePaginationStore((state) => state.setTotalCount);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  // fetch folder links
  useEffect(() => {
    const fetchFolderLinks = async () => {
      if (!selectedFolderId) return;

      const pageParam = searchParam.get('page');
      const currentPage = !pageParam ? 1 : parseInt(pageParam);

      const response = await getFolderLinks({
        folderId: selectedFolderId,
        page: currentPage,
        pageSize: 9,
      });
      setLinkList(response.list);
      setTotalLinkCount(response.totalCount);
    };
    fetchFolderLinks();
  }, [selectedFolderId, searchParam]);

  const handleLinkSelected = (linkId: number, linkUrl: string) => {
    setSelectedLinkId(linkId);

    if (!linkId) {
      navigate(`/links`);
      return;
    }

    window.open(linkUrl);
  };

  // "전체" 탭의 링크 선택 후 새로 고침하는 경우
  useEffect(() => {
    if (selectedFolderId === null) {
      navigate('/links');
    }
  }, []);

  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      {linkList.map((link) => (
        <Card key={link.id} link={link} onClick={() => handleLinkSelected(link.id, link.url)} />
      ))}
    </div>
  );
};
