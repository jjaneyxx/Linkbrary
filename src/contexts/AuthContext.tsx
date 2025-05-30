import { getUser } from '@api/user/api';
import { useFolderStore } from '@store/useFolderStore';
import { useLinkStore } from '@store/useLinkStore';
import { usePaginationStore } from '@store/usePaginationStore';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  user?: {
    id: number;
    name: string;
    imageSource: string;
    email: string;
    createdAt: string;
  };
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType['user'] | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 자동 로그인, 새로고침 이후에도 로그인 상태를 유지
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const fetchGetUser = async () => {
      // no accessToken
      if (!accessToken) {
        setUser(undefined);
        setIsLoggedIn(false);
      }
      // has accessToken
      try {
        const response = await getUser();
        setUser(response);
        setIsLoggedIn(true);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setUser(undefined);
          setIsLoggedIn(false);
          console.error('응답 : ', error.response.status);
        }
      }
    };
    fetchGetUser();
  }, []);

  const handleLogin = () => {
    const accessToken = localStorage.getItem('accessToken');

    // no access token
    if (!accessToken) {
      navigate('/login');
      return;
    }

    // hast access token
    const verifyUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
        setIsLoggedIn(true);
        navigate('/links');
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.error('서버 응답 : ', error.response);
        }
        setIsLoggedIn(false);
        toast.error('토큰이 만료되었습니다. 다시 로그인해주세요');
        navigate('/login');
      }
    };
    verifyUser();
  };

  const handleLogout = () => {
    useFolderStore.persist.clearStorage();
    usePaginationStore.persist.clearStorage();
    useLinkStore.getState().setLinkList([]);
    localStorage.removeItem('accessToken');

    setIsLoggedIn(false);
    toast.success('로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthProvider 안에서 useAuth 사용');
  }
  return context;
};
