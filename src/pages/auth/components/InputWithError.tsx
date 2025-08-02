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

const InputWithError = ({ disabled, errorMessage, ...rest }: InputProps) => {
  return (
    <div className="mt-3 mb-6 flex flex-col gap-3">
      <input
        {...rest}
        className={clsx(
          'h-[60px] rounded-lg border border-gray-300 bg-white px-[15px] py-[18px]',
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
