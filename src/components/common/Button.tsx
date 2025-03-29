type ButtonProps = {
  text: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
};

const Button = ({ text, className, onClick, type = 'submit' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} cursor-pointer rounded-lg bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] text-center font-semibold text-white hover:opacity-90`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
