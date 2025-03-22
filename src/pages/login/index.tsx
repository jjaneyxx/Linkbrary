import OAuthSection from './OAuthSection';
import Button from './Button';

import Input from './Input';
import { useEffect, useState } from 'react';
import AuthPrompt from './AuthPrompt';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePwdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginSuccess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 실행 (API 호출)
    navigate('/links');
  };

  useEffect(() => {
    console.log(email, password);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <AuthPrompt />

      <form onSubmit={handleLoginSuccess}>
        <Input
          label="이메일"
          id="user-email"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleEmailInputChange}
          marginBottom="mb-4"
        />

        <Input
          label="비밀번호"
          id="user-pwd"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={handlePwdInputChange}
          marginBottom="mb-[30px]"
        />
        <Button />
      </form>
      <OAuthSection />
    </div>
  );
};
export default Login;
