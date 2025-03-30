import { useEffect, useState } from 'react';
import Folder from './components/Folder';
import { clsx } from 'clsx';
import { getAllFolders, GetFoldersResponse } from '../../api/folder/api';
import { useFolderStore } from '../../store/useFolderStore';

// show added folders
const FolderTabs = () => {
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  const setSelectedFolder = useFolderStore((state) => state.setSelectedFolder);

  // getAllFolders API 응답을 state 로 저장
  const [folders, setFolders] = useState<GetFoldersResponse[]>([]);

  useEffect(() => {
    const showAllFolders = async () => {
      try {
        const response = await getAllFolders();
        setFolders(response);
      } catch (error) {
        console.log(error);
      }
    };
    showAllFolders();
  }, []);

  const handleFolderSelected = (folderName: string) => {
    setSelectedFolder(folderName);
  };

  return (
    <div className="border-blue flex gap-2">
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          children={folder.name}
          onClick={() => handleFolderSelected(folder.name)}
          className={clsx(selectedFolder === folder.name && 'bg-primary text-white')}
        />
      ))}
    </div>
  );
};
export default FolderTabs;
