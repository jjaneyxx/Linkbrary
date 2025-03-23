type ButtonProps = {
  text: string;
  className: string;
  onClick?: () => void; // 폼 제출 외 모달에서 사용
  type?: 'button' | 'submit';
};

const Button = ({ text, className, onClick, type = 'submit' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} rounded-lg px-5 py-4 font-semibold text-white bg-gradient-to-r from-[#6D6AFE] to-[#6AE3FE] mb-8 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
