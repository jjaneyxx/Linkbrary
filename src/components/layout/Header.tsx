import logo from '../../assets/icons/logo.svg';
import Button from '../common/Button';
import UserMenu from '../UserMenu';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { isLoggedIn, user, handleLogin, handleLogout } = useAuth();

  return (
    <div className="bg-gray-100 px-8 py-5 lg:px-[200px]">
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
