import logo from '../../assets/icons/logo.svg';
import Button from '../common/Button';
import UserMenu from '../UserMenu';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Header = () => {
  const { isLoggedIn, user, handleLogin, handleLogout } = useAuth();

  return (
    <div className="bg-gray-100 px-8 lg:px-[200px] py-5">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-4 md:h-6" />
        </Link>
        {isLoggedIn ? (
          <UserMenu onLogout={handleLogout} user={user} />
        ) : (
          <Button text="로그인" className="w-[128px] h-[53px]" onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};
export default Header;
