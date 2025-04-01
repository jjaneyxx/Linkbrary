import { getAllFolders } from '@api/folder/api';
import { useFolderStore } from '@store/useFolderStore';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Folder from './Folder';

const FolderTabs = () => {
  // get latest folders state from store
  const folders = useFolderStore.getState().folders;
  const setFoldersStore = useFolderStore((state) => state.setFolders);

  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedFolderId = useFolderStore((state) => state.setSelectedFolderId);

  const navigate = useNavigate();

  // getAllFolders API
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

  // set selectedFolder, query string
  const handleFolderSelected = (folderId: number | null) => {
    setSelectedFolderId(folderId);

    if (!folderId) {
      navigate('/links');
      return;
    }
    // add query string
    const params = new URLSearchParams();
    params.set('folder', folderId.toString());
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="border-blue flex gap-2">
      <Folder
        children="전체"
        onClick={() => handleFolderSelected(null)}
        className={clsx(!selectedFolderId && 'bg-primary text-white')}
      />
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          children={folder.name}
          onClick={() => handleFolderSelected(folder.id)}
          className={clsx(selectedFolderId === folder.id && 'bg-primary text-white')}
        />
      ))}
    </div>
  );
};
export default FolderTabs;
