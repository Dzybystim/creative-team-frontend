import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {SharedLayout} from "components/SharedLayout/SharedLayout"

const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'))



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="users" element={<Users />}>
           <Route path="signup" element={<Signup />} />
           <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
};
