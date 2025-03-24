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
      className={`${className} rounded-lg px-5 py-4 font-semibold text-white bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
