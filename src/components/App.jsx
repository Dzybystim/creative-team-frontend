import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/Login/Login';
import { RestrictedRoute } from 'RestrictedRoute';

const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="news" element={<div>NewsPage</div>} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="users" element={<div>Users</div>}>
          <Route
            path="signup"
            element={
              <RestrictedRoute component={SignUp} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo={'/contacts'} />
            }
          />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};
