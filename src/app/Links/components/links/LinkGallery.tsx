import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from './Card';

export const LinkGallery = () => {
  const linkList = useLinkStore((state) => state.linkList);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedLinkId = useLinkStore((state) => state.setSelectedLinkId);
  const fetchFolderLinks = useLinkStore((state) => state.fetchFolderLinks);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  // fetch folder links
  useEffect(() => {
    if (!selectedFolderId) return;

    const pageParam = searchParam.get('page');
    const currentPage = !pageParam ? 1 : parseInt(pageParam);

    fetchFolderLinks(selectedFolderId, currentPage);
  }, [selectedFolderId, searchParam]);

  const handleLinkSelected = (linkId: number, linkUrl: string) => {
    setSelectedLinkId(linkId);

    if (!linkId) {
      navigate(`/links`);
      return;
    }

    // add query string
    const params = new URLSearchParams();
    params.set('link', linkId.toString());

    // "전체" 탭에서 링크 선택
    if (selectedFolderId === null) {
      navigate(`?${params.toString()}`);
      window.open(linkUrl);
      return;
    }

    // select link from selected folder
    navigate(`?folder=${selectedFolderId}&${params.toString()}`);
    window.open(linkUrl);
  };

  // "전체" 탭의 링크 선택 후 새로고침
  useEffect(() => {
    if (selectedFolderId === null) {
      navigate('/links');
    }
  }, []);

  return linkList.length === 0 ? (
    <div className="mt-6 flex h-25 items-center justify-center">저장된 링크가 없습니다</div>
  ) : (
    <div className="mt-6 grid grid-cols-3 gap-5">
      {linkList.map((link) => (
        <Card key={link.id} link={link} onClick={() => handleLinkSelected(link.id, link.url)} />
      ))}
    </div>
  );
};
