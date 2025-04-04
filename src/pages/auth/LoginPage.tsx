import { signIn } from '@api/auth/api';
import Button from '@components/common/Button';
import { useAuth } from '@contexts/AuthContext';
import axios from 'axios';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthPrompt from './components/AuthPrompt';
import InputWithError from './components/InputWithError';
import OAuthSection from './components/OAuthSection';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleLoginSuccess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const formData = {
      email,
      password,
    };

    // api 요청 전 token 제거
    localStorage.removeItem('accessToken');

    try {
      const response = await signIn(formData);
      localStorage.setItem('accessToken', response.accessToken);
      toast.success('로그인 되었습니다.');
      handleLogin();
      navigate('/links');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('응답 : ', error.response.data);
      }
      toast.error('이메일 또는 비밀번호를 다시 확인해주세요.');
    }
  };

  const isEmailValid = useMemo(() => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (email === '') {
      return true;
    } else {
      return emailRegEx.test(email);
    }
  }, [email]);

  const isPasswordValid = useMemo(() => {
    if (password === '') {
      return true;
    } else {
      return password.length >= 8;
    }
  }, [password]);

  return (
    <div className="flex flex-col items-center">
      <AuthPrompt prompt="회원이 아니신가요?" linkText="회원 가입하기" linkTo="/signup" />

      <form onSubmit={handleLoginSuccess}>
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
          disabled={!isEmailValid}
          errorMessage="이메일 형식으로 작성해 주세요."
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
          disabled={!isPasswordValid}
          errorMessage="비밀번호는 8자 이상 작성해 주세요."
        />
        <Button text="로그인" className="mb-8 h-[53px] w-[400px] py-4" />
      </form>
      <OAuthSection />
    </div>
  );
};
export default Login;
