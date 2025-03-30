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
      className={`cursor-pointer rounded-lg text-center font-semibold text-white hover:opacity-90 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
