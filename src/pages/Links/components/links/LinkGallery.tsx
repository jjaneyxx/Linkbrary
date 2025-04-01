import { useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import { useLinkStore } from '@store/useLinkStore';

export const LinkGallery = () => {
  const linkList = useLinkStore((state) => state.linkList);
  const navigate = useNavigate();
  const { folderId } = useParams();

  const handleLinkSelected = (linkId: number) => {
    if (!linkId) {
      navigate(`/links`);
    } else {
      navigate(`/links/folder/${folderId}/link/${linkId}`);
    }
  };

  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      {linkList.map((link) => (
        <Card key={link.id} link={link} onClick={() => handleLinkSelected(link.id)} />
      ))}
    </div>
  );
};
