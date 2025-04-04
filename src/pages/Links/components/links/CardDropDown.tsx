import { deleteLink, putLink } from '@api/link/api';
import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { useModalStore } from '@store/useModalStore';
import { usePaginationStore } from '@store/usePaginationStore';
import clsx from 'clsx';
import { useState } from 'react';
import toast from 'react-hot-toast';

const CardDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const selectedFolderId = useFolderStore((state) => state.selectedFolderId);
  const selectedLinkId = useLinkStore((state) => state.selectedLinkId);
  const currentPage = usePaginationStore.getState().currentPage;
  const fetchAllLinks = useLinkStore((state) => state.fetchAllLinks);
  const fetchFolderLinks = useLinkStore((state) => state.fetchFolderLinks);

  const [isSelected, setIsSelected] = useState<string>('');

  // delete link
  const handleDeleteLink = async () => {
    if (!selectedLinkId) return;

    try {
      await deleteLink(selectedLinkId);
      if (selectedFolderId) {
        fetchFolderLinks(selectedFolderId, currentPage);
      } else {
        fetchAllLinks(currentPage);
      }
      toast.success('링크가 삭제되었습니다.');
      closeModal();
    } catch (error) {
      toast.error('링크 삭제에 실패했습니다. 다시 시도해주세요.');
      console.log('error', error);
    }
  };

  // put link
  const handlePutLink = async () => {
    if (!selectedLinkId) return;

    // brings recent input
    const modalLinkInput = useModalStore.getState().input;

    if (!modalLinkInput) {
      toast.error('수정할 링크가 비어있어요.');
      return;
    }

    const linkData = {
      url: modalLinkInput,
    };

    try {
      await putLink(selectedLinkId, linkData);
      if (selectedFolderId) {
        fetchFolderLinks(selectedFolderId, currentPage);
      } else {
        fetchAllLinks(currentPage);
      }
      toast.success('링크가 수정되었습니다');
      closeModal();
    } catch (error) {
      toast.error('링크 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('error', error);
    }
  };

  const handleDropDownSelected = (value: string) => {
    setIsSelected(value);
    if (value === 'delete') {
      openModal('링크 삭제', '삭제하기', handleDeleteLink, 'delete');
    } else if (value === 'edit') {
      openModal('링크 수정', '변경하기', handlePutLink);
    }
  };

  if (isDropDownOpen === false) {
    return null;
  }

  return (
    <ul className="absolute left-0 flex w-25 flex-col bg-white shadow-lg">
      <li
        className={clsx(
          'cursor-pointer px-3 py-[7px] text-[14px] hover:bg-[#E7EFFB]',
          isSelected === 'delete' && 'text-primary bg-[#E7EFFB]',
        )}
        onClick={(e) => {
          e.stopPropagation(); // prevent event bubbling
          handleDropDownSelected('delete');
        }}
      >
        삭제하기
      </li>
      <li
        className={clsx(
          'cursor-pointer px-3 py-[7px] text-[14px] hover:bg-[#E7EFFB]',
          isSelected === 'edit' && 'text-primary bg-[#E7EFFB]',
        )}
        onClick={(e) => {
          e.stopPropagation(); // prevent event bubbling
          handleDropDownSelected('edit');
        }}
      >
        수정하기
      </li>
    </ul>
  );
};
export default CardDropDown;
