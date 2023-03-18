import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "components/SharedLayout/SharedLayout"

const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'))
const NoticesCategoriesList = lazy(() => import('../components/NoticesCategoriesList/NoticesCategoriesList'))



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="news" element={<div>NewsPage</div>} />
        <Route path="notices" element={<NoticesPage />} >
          <Route path="sell" element={<NoticesCategoriesList/>} />
          <Route path="lost-found" element={<NoticesCategoriesList/>} />
          <Route path="for-free" element={<NoticesCategoriesList/>} />
          <Route path="favorite" element={<NoticesCategoriesList/>} />
          <Route path="own" element={<NoticesCategoriesList/>} />
        </Route>
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="users" element={<div>Users</div>}>
           <Route path="signup" element={<div>Signup</div>} />
           <Route path="login" element={<div>Login</div>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>

  );
};
