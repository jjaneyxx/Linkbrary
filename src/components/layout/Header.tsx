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

  const handleLogin = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // token 이 없을 경우 바로 로그인 화면으로 이동
      navigate('/login');
      return;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    alert('로그아웃 성공');
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 px-8 lg:px-[200px] py-5">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-4 md:h-6" />
        </Link>
        {isLoggedIn ? (
          <UserMenu onLogout={handleLogout} />
        ) : (
          <Button text="로그인" className="w-[128px] h-[53px]" onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};
export default Header;
