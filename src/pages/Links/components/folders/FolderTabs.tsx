import { useFolderStore } from '@store/useFolderStore';
import { usePaginationStore } from '@store/usePaginationStore';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Folder from './Folder';

const FolderTabs = () => {
  const folders = useFolderStore((state) => state.folders);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const setSelectedFolderId = useFolderStore((state) => state.setSelectedFolderId);
  const fetchFolders = useFolderStore((state) => state.fetchFolders);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFolders(); // getAllFolders API
  }, []);

  // set selectedFolder, query string
  const handleFolderSelected = (folderId: number | null) => {
    setSelectedFolderId(folderId);
    setCurrentPage(1);

    if (!folderId) {
      navigate('/links');
      return;
    }
    // add query string
    const params = new URLSearchParams();
    params.set('folder', folderId.toString());
    navigate(`?${params.toString()}`);
  };

  // remain current state after refresh
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const folderId = params.get('folder');
    if (folderId) setSelectedFolderId(Number(folderId));
  }, []);

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
