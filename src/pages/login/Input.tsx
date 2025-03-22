import ErrorMessage from './ErrorMessage';

type InputProps = {
  label: string;
  id: string;
  type?: string; // email, password
  name: string;
  value: string;
  placeholder?: string; // 선택적으로 받음
  marginBottom?: string;
  isEmailValid?: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  marginBottom,
  isEmailValid,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-3 mb-6 ${marginBottom}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="px-[15px] py-[18px] h-[60px] border border-[#CCD5E3] rounded-lg bg-white "
      />
      {isEmailValid === false && <ErrorMessage text="이메일 형식으로 작성해 주세요." />}
    </div>
  );
};
export default Input;
