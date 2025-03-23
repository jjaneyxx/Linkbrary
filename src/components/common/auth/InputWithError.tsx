import ErrorMessage from '../../../pages/login/ErrorMessage';
import clsx from 'clsx';

type InputProps = {
  label: string;
  id: string;
  type?: string; // email, password
  name: string;
  value: string;
  placeholder?: string; // 선택적으로 받음
  marginBottom?: string;
  isEmailValid?: boolean;
  isPasswordValid?: boolean;
  isUserNameValid?: boolean;
  isConfirmPasswordValid?: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithError = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  marginBottom,
  isEmailValid,
  isPasswordValid,
  isUserNameValid,
  isConfirmPasswordValid,
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
        className={clsx(
          'px-[15px] py-[18px] h-[60px] border border-gray-300 rounded-lg bg-white',
          isEmailValid === false && 'border-red',
          isPasswordValid === false && 'border-red',
          isUserNameValid === false && 'border-red',
          isConfirmPasswordValid === false && 'border-red',
        )}
      />
      {isEmailValid === false && <ErrorMessage text="이메일 형식으로 작성해 주세요." />}
      {isPasswordValid === false && <ErrorMessage text="비밀번호는 8자 이상 작성해 주세요." />}
      {isUserNameValid === false && <ErrorMessage text="닉네임은 열 자 이하로 작성해주세요." />}
      {isConfirmPasswordValid === false && <ErrorMessage text="비밀번호가 일치하지 않습니다." />}
    </div>
  );
};
export default InputWithError;
