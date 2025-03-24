import logo from '../../assets/logo.svg';
import Button from '../../pages/login/Button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // local storage 에 accessToken 이 있는지 확인 필요
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      console.log(accessToken);
      navigate('/login'); // 아래 구현 후 삭제
      // 즐겨찾기, 게정 정보 띄우기
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-gray-100 px-[200px] py-5 ">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[24px]" />
        </Link>
        <Button text="로그인" className="w-[128px] h-[53px]" onClick={handleLoginClick} />
      </div>
    </div>
  );
};
export default Header;
