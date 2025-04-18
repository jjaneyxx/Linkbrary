import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default AuthLayout;
