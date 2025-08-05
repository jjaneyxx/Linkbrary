import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import clsx from 'clsx';

type InputProps = {
  name: string; 
  isValid? : boolean; 
  emailErrorMessage? : string; 
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Label 컴포넌트 분리
export const Label = ({ label, id }: { label: string; id: string }) => {
  return <label htmlFor={id}>{label}</label>;
};

const InputWithError = ({ name, isValid, emailErrorMessage, ...rest }: InputProps) => {
  const [helperText, setHelperText] = useState<string>(''); 

  useEffect(() => {
    // emailErrorMessage가 있으면 우선적으로 표시
    if(emailErrorMessage) {
      setHelperText(emailErrorMessage);
      return;
    }
    
    // isValid가 false일 때만 기본 에러 메시지 표시
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
      // 유효한 상태이고 emailErrorMessage도 없으면 헬퍼 텍스트 초기화
      setHelperText("");
    }
  }, [isValid, name, emailErrorMessage])

  return (
    <div className="mt-3 mb-6 flex flex-col gap-3">
      <input
        {...rest}
        className={clsx(
          'h-[60px] rounded-lg border border-gray-300 bg-white px-[15px] py-[18px]',
          (!isValid || emailErrorMessage) && 'border-red',
        )}
      />
      {(!isValid || emailErrorMessage) && <ErrorMessage text={helperText} />}
    </div>
  );
};

// Label 컴포넌트를 하위 컴포넌트로 등록
InputWithError.Label = Label;
export default InputWithError;
