import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-yellow">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
