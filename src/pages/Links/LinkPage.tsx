import AddLinkInput from './AddLinkInput';
import FolderSection from './FolderSection';
import SearchLinkInput from './SearchLinkInput';

const LinkPage: React.FC = () => {
  return (
    <div>
      <AddLinkInput />
      <div className="lg:px-[190px]">
        <SearchLinkInput />
        <FolderSection />
      </div>
    </div>
  );
};
export default LinkPage;
