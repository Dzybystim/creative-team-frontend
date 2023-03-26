import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import SharedLayout from 'components/SharedLayout/SharedLayout';

// import SignUp from 'pages/SignUp/SignUp';
// import Login from 'pages/Login/Login';
import PublicRoutes from './PublickRoute';
import RestrictedRoutes from './RestrictedRoute';
// import NoticesPage from ./RestrictedRoutePage';
// import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
// import OurFriendsPage from 'pages/OurFriendsPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const NewsPage = lazy(() => import('../pages/News'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

const UserPage = lazy(() => import('../pages/UserPage'));
const NotFound = lazy(() => import('../utilities/NotFound/NotFound'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route element={<RestrictedRoutes />}>
              <Route path="user" element={<UserPage />} />
            </Route>
            <Route path="news" element={<NewsPage />} />
            <Route path="notices/:category" element={<NoticesPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
};
