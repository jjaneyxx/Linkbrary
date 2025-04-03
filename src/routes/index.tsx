import AuthLayout from '@components/layout/AuthLayout';
import MainLayout from '@components/layout/MainLayout';
import { AuthContextProvider } from '@contexts/AuthContext';
import Login from '@pages/auth/LoginPage';
import Signup from '@pages/auth/SignupPage';
import { Faq } from '@pages/Landing/Faq';
import Landing from '@pages/Landing/Landing';
import { Privacy } from '@pages/Landing/Privacy';
import LinkPage from '@pages/Links/LinkPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/links" element={<LinkPage />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
export default AppRouter;
