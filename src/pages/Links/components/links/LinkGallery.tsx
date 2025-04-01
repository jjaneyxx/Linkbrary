import { getFolderLinks } from '@api/link/api';
import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

export const LinkGallery = () => {
  const linkList = useLinkStore((state) => state.linkList);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedLinkId = useLinkStore((state) => state.setSelectedLinkId);
  const setLinkList = useLinkStore((state) => state.setLinkList);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFolderLinks = async () => {
      if (!selectedFolderId) return;

      const response = await getFolderLinks({
        folderId: selectedFolderId,
        page: 1,
        pageSize: 10,
      });
      setLinkList(response.list);
    };
    fetchFolderLinks();
  }, [selectedFolderId]);

  const handleLinkSelected = (linkId: number) => {
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
      return;
    }
    // select link from selected folder
    navigate(`?folder=${selectedFolderId}&${params.toString()}`);
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
        <Card key={link.id} link={link} onClick={() => handleLinkSelected(link.id)} />
      ))}
    </div>
  );
};
