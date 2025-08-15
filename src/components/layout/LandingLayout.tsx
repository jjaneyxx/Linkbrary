import { Outlet } from 'react-router-dom';

const LandingLayout = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-yellow">
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};
export default LandingLayout;
