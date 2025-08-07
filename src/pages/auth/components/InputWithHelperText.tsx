import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import clsx from 'clsx';

type InputProps = {
  name: string; 
  isValid? : boolean; 
  emailHelperText? : string; 
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Label = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return <label htmlFor={htmlFor}>{label}</label>;
};

const InputWithHelperText = ({ name, id, isValid, emailHelperText, ...rest }: InputProps) => {
  const [helperText, setHelperText] = useState<string>(''); 

  useEffect(() => {

    // 중복된 이메일일 경우 헬퍼 텍스트 우선 표시
    if(emailHelperText) {
      setHelperText(emailHelperText);
      return;
    }
    // 유효하지 않은 입력일 경우 헬퍼 텍스트 표시
    if(!isValid){
      switch(name){
  
        case "email" : 
        setHelperText("유효한 형식의 이메일을 작성해주세요."); 
        break; 
  
        case "user-name" : 
        setHelperText("닉네임은 열 자 이하로 작성해주세요.")
        break; 
  
        case "password" : 
        setHelperText("비밀번호는 8자 이상 작성해 주세요."); 
        break; 
  
        case "passwordConfirm" : 
        setHelperText("비밀번호가 일치하지 않습니다.")
        break; 
      }
    } else {
      setHelperText("");
    }
  }, [isValid, name, emailHelperText])

  return (
    <div className="mt-3 mb-6 flex flex-col gap-3">
      <input
        {...rest}
        id={name}
        className={clsx(
          'h-[60px] rounded-lg border border-gray-300 bg-white px-[15px] py-[18px]',
          (!isValid || emailHelperText) && 'border-red',
        )}
      />
      {(!isValid || emailHelperText) && <ErrorMessage text={helperText} />}
    </div>
  );
};

// Label 컴포넌트를 하위 컴포넌트로 등록
InputWithHelperText.Label = Label;
export default InputWithHelperText;

