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
  isLoadingAuth = false,
}: ButtonProps) => {
  const isLoading = useModalStore((state) => state.isLoading);

  return (
    <button
      type={type}
      disabled={isLoading}
      className={clsx(
        `rounded-lg text-center font-semibold text-white ${className}`,
        modalMode === 'delete' ? 'bg-red' : 'bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE]',
        isLoading || isLoadingAuth
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:opacity-90',
      )}
      onClick={onClick}
    >
      {isLoading || isLoadingAuth ? <div>로딩중</div> : text}
    </button>
  );
};
export default Button;
