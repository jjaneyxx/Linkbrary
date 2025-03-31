import Card from '../../components/common/Card';
import { useLinkStore } from '../../store/useLinkStore';

const LinkCardsSection = () => {
  const linkList = useLinkStore((state) => state.linkList);

  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      {linkList.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
};
export default LinkCardsSection;
