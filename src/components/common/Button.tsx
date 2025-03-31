import clsx from 'clsx';

type ButtonProps = {
  text: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  modalMode?: string;
};

const Button = ({ text, className, onClick, type = 'submit', modalMode }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        `cursor-pointer rounded-lg text-center font-semibold text-white hover:opacity-90 ${className}`,
        modalMode === 'delete' ? 'bg-red' : 'bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE]',
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
