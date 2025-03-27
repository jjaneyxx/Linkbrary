import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../api/user/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  const [user, setUser] = useState<AuthContextType['user']>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const fetchGetUser = async () => {
      if (accessToken) {
        const response = await getUser();
        setUser(response);
        setIsLoggedIn(true);
      }
    };
    fetchGetUser();
  }, []);

  const handleLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
      return;
    }

    const verifyUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
        setIsLoggedIn(true);
        navigate('/links');
        console.log('로그인 성공', isLoggedIn);
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
