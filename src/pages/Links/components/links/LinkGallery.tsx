import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

export const LinkGallery = () => {
  const linkList = useLinkStore((state) => state.linkList);
  const setSelectedLinkId = useLinkStore((state) => state.setSelectedLinkId);
  const navigate = useNavigate();
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);

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

  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      {linkList.map((link) => (
        <Card key={link.id} link={link} onClick={() => handleLinkSelected(link.id)} />
      ))}
    </div>
  );
};
