import logo from '../../assets/logo.svg';
import loginBtn from '../../assets/login-btn.svg';
import googleLogin from '../../assets/google-login.svg';
import kakaoLogin from '../../assets/kakao-login.svg';

const Login: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <span>회원이 아니신가요? </span>
      <span className="text-primary">회원 가입하기</span>

      <div>input component</div>
      <img src={loginBtn} className="mb-8" />

      <div className="bg-gray-200 border-gray-300 px-4 py-3 flex justify-between">
        <span>소셜로그인</span>
        <div className="flex">
          <img src={googleLogin} />
          <img src={kakaoLogin} />
        </div>
      </div>
    </>
  );
};
export default Login;
