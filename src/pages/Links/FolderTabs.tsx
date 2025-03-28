import { useState } from 'react';
import Folder from './components/Folder';
import { clsx } from 'clsx';

// show added folders
const FolderTabs = () => {
  // selected folder name
  const [isSelectedFolder, setIsSelectedFolder] = useState<string>('');

  const handleFolderSelected = (folderName: string) => {
    setIsSelectedFolder(folderName);
  };

  return (
    <div className="border-blue flex gap-2">
      <Folder
        children="전체"
        onClick={() => handleFolderSelected('전체')}
        className={clsx(isSelectedFolder === '전체' && 'bg-primary text-white')}
      />
      <Folder
        children="음악"
        onClick={() => handleFolderSelected('음악')}
        className={clsx(isSelectedFolder === '음악' && 'bg-primary text-white')}
      />
      <Folder
        children="카페"
        onClick={() => handleFolderSelected('카페')}
        className={clsx(isSelectedFolder === '카페' && 'bg-primary text-white')}
      />
    </div>
  );
};
export default FolderTabs;
