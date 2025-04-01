import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '@contexts/AuthContext';
import MainLayout from '@components/layout/MainLayout';
import AuthLayout from '@components/layout/AuthLayout';
import Landing from '@pages/Landing/Landing';
import LinkPage from '@pages/Links/LinkPage';
import Login from '@pages/auth/LoginPage';
import Signup from '@pages/auth/SignupPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/links" element={<LinkPage />}></Route>
            {/*@todo folderId, linkId query 로 수정*/}
            <Route path="/links/folder/:folderId" element={<LinkPage />}></Route>
            <Route path="/links/folder/:folderId/link/:linkId" element={<LinkPage />}></Route>
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
