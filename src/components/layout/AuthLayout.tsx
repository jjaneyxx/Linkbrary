import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default AuthLayout;
