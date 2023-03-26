import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/Login/Login';
import PublicRoutes from './PublickRoute';
import PrivateRoutes from './PrivetRoutes';
// import NoticesPage from 'pages/NoticesPage';
// import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
// import OurFriendsPage from 'pages/OurFriendsPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const NewsPage = lazy(() => import('../pages/News'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

const UserPage = lazy(() => import('../pages/UserPage'));
const NotFound = lazy(() => import('../utilities/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="user" element={<UserPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices/:category" element={<NoticesPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoutes restricted />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="edit" element={<div>Edit</div>} />
              <Route path="logout" element={<div>Logout</div>} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
};
