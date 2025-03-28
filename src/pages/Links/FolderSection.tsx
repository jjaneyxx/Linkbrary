import FolderTabs from './FolderTabs';

const FolderSection = () => {
  return (
    <div className="mt-10 flex justify-between">
      <FolderTabs />
      <button className="text-primary leading-none font-medium">폴더 추가 + </button>
    </div>
  );
};

export default FolderSection;
