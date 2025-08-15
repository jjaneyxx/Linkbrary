import { useModalStore } from '@store/useModalStore';
import clsx from 'clsx';

type ButtonProps = {
  text: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  modalMode?: string;
  disabled?: boolean;
  isLoadingAuth?: boolean; // auth
};

const Button = ({
  text,
  className,
  onClick,
  type = 'submit',
  modalMode,
  disabled, 
  isLoadingAuth = false,
}: ButtonProps) => {
  const isLoading = useModalStore((state) => state.isLoading);

  return (
    <button
      disabled={disabled || isLoading || isLoadingAuth}
      type={type}
      className={clsx(
        `rounded-lg text-center font-semibold text-white ${className}`,
        disabled || isLoading || isLoadingAuth
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:opacity-90',
        // modal 
        modalMode === 'delete' 
        ? 'bg-red' 
        : 'bg-gradient-to-r from-[#F59E0B] to-[#6AE3FE]',
      )}
      onClick={onClick}
    >
      {isLoading || isLoadingAuth ? <div>로딩중</div> : text}
    </button>
  );
};
export default Button;
