import ErrorMessage from '../../../pages/login/ErrorMessage';
import clsx from 'clsx';

type InputProps = {
  label: string;
  id: string;
  type: string; // email, password
  name: string;
  value: string;
  autoComplete?: string;
  placeholder: string;
  marginBottom?: string;
  isInvalid: boolean;
  errorMessage: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithError = ({
  label,
  id,
  type,
  name,
  value,
  autoComplete,
  placeholder,
  marginBottom,
  isInvalid,
  onBlur,
  onChange,
  errorMessage,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-3 mb-6 ${marginBottom}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          'px-[15px] py-[18px] h-[60px] border border-gray-300 rounded-lg bg-white',
          isInvalid && 'border-red',
        )}
      />
      {isInvalid && <ErrorMessage text={errorMessage} />}
    </div>
  );
};
export default InputWithError;
