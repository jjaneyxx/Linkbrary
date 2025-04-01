import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/common/Card';
import { useLinkStore } from '../../store/useLinkStore';

const LinkCardsSection = () => {
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
export default LinkCardsSection;
