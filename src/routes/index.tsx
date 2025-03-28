import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import LinkPage from '../pages/Links/LinkPage';
import Favorite from '../pages/Favorite/Favorite';
import Login from '../pages/auth/LoginPage';
import Signup from '../pages/auth/SignupPage';
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';
import { AuthContextProvider } from '../contexts/AuthContext';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/links" element={<LinkPage />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
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
