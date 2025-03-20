import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Links from '../pages/links';
import Favorite from '../pages/favorite';
import Layout from '../layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
