import AuthPrompt from '../../components/common/auth/AuthPrompt';
import InputWithError from '../../components/common/auth/InputWithError';
import Button from '../login/Button';
import api from '../../api/axios';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSignupSuccess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!isEmailValid || !isUserNameValid || !isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    const formData = {
      email,
      password,
      name: userName,
    };

    try {
      const response = await api.signUp(formData);
      localStorage.setItem('accessToken', response.data.accessToken);
      alert('회원가입 성공');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log('서버 응답 : ', error.response.data);
      }
      alert('회원가입 실패');
    }
  };

  const handleEmailInputValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    setIsEmailValid(emailRegEx.test(email));
  };

  const handleUserNameInputValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const userName = e.target.value;
    setIsUserNameValid(userName.length <= 10);
  };

  const handlePasswordInputValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setIsPasswordValid(password.length >= 8);
  };

  const handleConfirmPasswordValid = (e: React.FocusEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setIsConfirmPasswordValid(password === confirmPassword);
  };

  return (
    <div className="flex flex-col items-center">
      <AuthPrompt prompt="이미 회원이신가요?" linkText="로그인 하기" linkTo="/login" />

      <form onSubmit={handleSignupSuccess}>
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
          label="이름"
          id="user-name"
          type="text"
          name="user-name"
          autoComplete="username"
          placeholder="원하는 닉네임을 적어주세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          marginBottom="mb-4"
          onBlur={handleUserNameInputValid}
          isInvalid={!isUserNameValid}
          errorMessage="닉네임은 열 자 이하로 작성해주세요."
        />

        <InputWithError
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          marginBottom="mb-4"
          onBlur={handlePasswordInputValid}
          isInvalid={!isPasswordValid}
          errorMessage="비밀번호는 8자 이상 작성해 주세요."
        />

        <InputWithError
          label="비밀번호 확인"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="비밀번호를 한번 더 입력해 주세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          marginBottom="mb-[30px]"
          onBlur={handleConfirmPasswordValid}
          isInvalid={!isConfirmPasswordValid}
          errorMessage="비밀번호가 일치하지 않습니다."
        />
        <Button text="회원가입" className="w-[400px] h-[53px] mb-8 " />
      </form>
    </div>
  );
};
export default Signup;
