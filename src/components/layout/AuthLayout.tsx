import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default AuthLayout;
