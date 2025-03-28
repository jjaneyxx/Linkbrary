import { useModalStore } from '../../store/useModalStore';

const Modal = () => {
  const handleModalClose = useModalStore((state) => state.closeModal);

  return (
    <div className="bg-primary absolute top-1/2 left-1/2 h-30 w-30 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
      <button onClick={handleModalClose}>X</button>
      <div>test modal</div>
    </div>
  );
};
export default Modal;
