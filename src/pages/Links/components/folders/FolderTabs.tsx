import { getAllFolders } from '@api/folder/api';
import { useFolderStore } from '@store/useFolderStore';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Folder from './Folder';

// show added folders
const FolderTabs = () => {
  const selectedFolder = useFolderStore((state) => state.selectedFolder);
  const setSelectedFolder = useFolderStore((state) => state.setSelectedFolder);
  const setFoldersStore = useFolderStore((state) => state.setFolders);
  const navigate = useNavigate();
  // get latest folders state from store
  const folders = useFolderStore.getState().folders;

  useEffect(() => {
    const showAllFolders = async () => {
      try {
        // response : object array
        const response = await getAllFolders();
        setFoldersStore(response);
      } catch (error) {
        console.log(error);
      }
    };
    showAllFolders();
  }, []);

  const handleFolderSelected = (folderName: string, folderId?: number) => {
    setSelectedFolder(folderName);

    if (!folderId) {
      navigate(`/links`);
    } else {
      navigate(`/links/folder/${folderId}`);
    }
  };

  return (
    <div className="border-blue flex gap-2">
      <Folder
        children="전체"
        onClick={() => handleFolderSelected('전체')}
        className={clsx(selectedFolder === '전체' && 'bg-primary text-white')}
      />
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          children={folder.name}
          onClick={() => handleFolderSelected(folder.name, folder.id)}
          className={clsx(selectedFolder === folder.name && 'bg-primary text-white')}
        />
      ))}
    </div>
  );
};
export default FolderTabs;
