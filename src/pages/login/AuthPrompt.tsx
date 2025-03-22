import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const AuthPrompt = () => {
  // gap 8px, weight 600
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="h-[38px] mb-4" />
      </Link>
      <div className="flex mb-[30px] gap-2">
        <div>회원이 아니신가요? </div>
        <Link to="/signup" className="text-primary font-semibold underline decoration-auto">
          회원 가입하기
        </Link>
      </div>
    </div>
  );
};
export default AuthPrompt;
