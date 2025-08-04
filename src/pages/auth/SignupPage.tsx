import { signUp } from '@api/auth/api';
import Button from '@components/common/Button';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthPrompt from './components/AuthPrompt';
import InputWithError from './components/InputWithError';
import { isUserNameValid, isEmailValid, isPasswordValid, isPasswordConfirmValid } from '@utils/authValidation';
import { postCheckEmail } from '@api/user/api';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState("이메일 형식으로 작성해 주세요.")
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const navigate = useNavigate();

  const isFormValid = email != '' && password !== '' 
  && isEmailValid(email) && isPasswordValid(password) 
  && isPasswordConfirmValid(password, passwordConfirm) && isUserNameValid(userName); 

  // useRef 는 객체를 반환 { current : <초기값> }
  // debounceTimerRef.current 로 접근해야 실제 값을 읽을 수 있음
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null); 

  // 이메일 중복 검사 postCheckEmail
  const checkEmailAvailability = async () => {
    try {
      const response = await postCheckEmail({email}); 
      if (response.isUsableEmail) setEmailErrorMessage(""); 
    } catch (error) {
      if(axios.isAxiosError(error) && error.response && error.response.status === 409){
        setEmailErrorMessage(error.response.data.message)
        console.log(error.response.data.message); // 이미 존재하는 이메일입니다
      }
    }
  }

  // 이메일 중복 검사 API 를 호출 
  useEffect(() => {

    if(!email || !isEmailValid(email)) return; 

    // set new timer
    // 500 초 이후 함수 호출
    debounceTimerRef.current = setTimeout(() => {

      checkEmailAvailability(); 
    }, 500)

    // cleanup timeID
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };

  }, [email]); 



  const handleSignupSuccess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 유효성 검사
    if (!isEmailValid || !isUserNameValid || !isPasswordValid || !isPasswordConfirmValid) {
      return;
    }
    // API 로직
    const formData = {
      email,
      password,
      name: userName,
    };
    try {
      setIsLoadingAuth(true);
      const response = await signUp(formData);
      localStorage.setItem('accessToken', response.accessToken);
      toast.success('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('서버 응답 : ', error.response.data);
      }
      toast.error('이미 사용 중인 이메일입니다.');
    } finally {
      setIsLoadingAuth(false);
    }
  };
  // !isEmailValid(email)


  return (
    <div className="flex flex-col items-center">
      <AuthPrompt prompt="이미 회원이신가요?" linkText="로그인 하기" linkTo="/login" />

      <form onSubmit={handleSignupSuccess}>
        <InputWithError.Label label="이메일" id="user-email" />
        <InputWithError
          id="user-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
          disabled={!isEmailValid(email)}
          errorMessage={emailErrorMessage}
        />

        <InputWithError.Label label="이름" id="user-name" />
        <InputWithError
          type="text"
          name="user-name"
          autoComplete="username"
          placeholder="원하는 닉네임을 적어주세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mb-4"
          disabled={!isUserNameValid(userName)}
          errorMessage="닉네임은 열 자 이하로 작성해주세요."
        />

        <InputWithError.Label label="비밀번호" id="password" />
        <InputWithError
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          disabled={!isPasswordValid(password)}
          errorMessage="비밀번호는 8자 이상 작성해 주세요."
        />

        <InputWithError.Label label="비밀번호 확인" id="password-confirm" />
        <InputWithError
          type="password"
          name="passwordConfirm"
          autoComplete="new-password"
          placeholder="비밀번호를 한번 더 입력해 주세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="mb-[30px]"
          disabled={!isPasswordConfirmValid(password, passwordConfirm)}
          errorMessage="비밀번호가 일치하지 않습니다."
        />
        <Button
          text="회원가입"
          className="mb-8 h-[53px] w-[400px] py-4"
          disabled={!isFormValid}
          isLoadingAuth={isLoadingAuth}
        />
      </form>
    </div>
  );
};
export default Signup;
