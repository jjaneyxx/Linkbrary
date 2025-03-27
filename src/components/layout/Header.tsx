import logo from '../../assets/icons/logo.svg';
import Button from '../common/Button';
import UserMenu from '../UserMenu';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../api/user/api';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginWithToken = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // token 이 없을 경우 바로 로그인 화면으로 이동
      navigate('/login');
      return;
    }

    // token 이 있는 경우 유효한 토큰인지 검증 요청
    const verifyUser = async () => {
      try {
        const response = await getUser();
        console.log(response);
        setIsLoggedIn(true);
        navigate('/links');
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log('서버 응답 : ', error.response);
        }
        setIsLoggedIn(false);
        alert('로그인 실패');
      }
    };
    verifyUser();
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
          <Button text="로그인" className="w-[128px] h-[53px]" onClick={handleLoginWithToken} />
        )}
      </div>
    </div>
  );
};
export default Header;
