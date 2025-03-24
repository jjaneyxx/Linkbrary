import OAuthSection from './OAuthSection';
import Button from './Button';
import AuthPrompt from '../../components/common/auth/AuthPrompt';
import InputWithError from '../../components/common/auth/InputWithError';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleLoginSuccess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 실행 (API 호출)
    navigate('/links');
  };

  const handleEmailInputValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    setIsEmailValid(emailRegEx.test(email));
  };

  const handlePasswordInputValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setIsPasswordValid(password.length >= 8);
  };

  return (
    <div className="flex flex-col items-center">
      <AuthPrompt prompt="회원이 아니신가요?" linkText="회원 가입하기" linkTo="/signup" />

      <form onSubmit={handleLoginSuccess}>
        <InputWithError
          label="이메일"
          id="user-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          marginBottom="mb-4"
          onBlur={handleEmailInputValid}
          isInvalid={!isEmailValid}
          errorMessage="이메일 형식으로 작성해 주세요."
        />

        <InputWithError
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          autoComplete="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          marginBottom="mb-[30px]"
          onBlur={handlePasswordInputValid}
          isInvalid={!isPasswordValid}
          errorMessage="비밀번호는 8자 이상 작성해 주세요."
        />
        <Button text="로그인" className="w-[400px] h-[53px]" />
      </form>
      <OAuthSection />
    </div>
  );
};
export default Login;
