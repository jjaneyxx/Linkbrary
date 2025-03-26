import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import Button from '../common/Button';
import { Link, useNavigate } from 'react-router-dom';
import UserMenu from '../UserMenu';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginClick = () => {
    // local storage 에 accessToken 이 있는지 확인 필요
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      navigate('/login'); // 아래 구현 후 삭제
      // 즐겨찾기, 게정 정보 띄우기
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-gray-100 px-8 lg:px-[200px] py-5">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-4 md:h-6" />
        </Link>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button text="로그인" className="w-[128px] h-[53px]" onClick={handleLoginClick} />
        )}
      </div>
    </div>
  );
};
export default Header;
