import ErrorMessage from './ErrorMessage';
import clsx from 'clsx';

type InputProps = {
  className?: string;
  errorMessage: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Label 컴포넌트 분리
export const Label = ({ label, id }: { label: string; id: string }) => {
  return <label htmlFor={id}>{label}</label>;
};

const InputWithError = ({ className, disabled, errorMessage, ...rest }: InputProps) => {
  return (
    <div className={`flex flex-col gap-3 mt-3 mb-6 ${className}`}>
      <input
        {...rest}
        className={clsx(
          'px-[15px] py-[18px] h-[60px] border border-gray-300 rounded-lg bg-white',
          disabled && 'border-red',
        )}
      />
      {disabled && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

// Label 컴포넌트를 하위 컴포넌트로 등록
InputWithError.Label = Label;
export default InputWithError;
