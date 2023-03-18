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
        <Route index element={<div>Header</div>} />
        <Route path="news" element={<div>NewsPage</div>} />
        <Route path="notices" element={<NoticesPage />} >

          <Route path="sell" element={<NoticesCategoriesList/>} />
          <Route path="lost-found" element={<NoticesCategoriesList/>} />
          <Route path="for-free" element={<NoticesCategoriesList/>} />
          <Route path="favorite" element={<NoticesCategoriesList/>} />
          <Route path="own" element={<NoticesCategoriesList/>} />


           <Route path="title" element={<div>Title</div>} />
           <Route path="category" element={<div>Category</div>} />
           <Route path="selected" element={<div>Selected</div>} />
           <Route path="selected/:selectedId" element={<div>Selected/selectedId</div>} />
           <Route path="user" element={<div>User</div>} />
           <Route path="user/:noticeId" element={<div>Notice/noticeId</div>} />
        </Route>
        <Route path="notices/:noticeId" element={<div>Notices/noticeId</div>} />
        <Route path="pets" element={<div>Pets</div>} />
        <Route path="pets/:petId" element={<div>Pets/petId</div>} />
        <Route path="servicesSidebar" element={<OurFriendsPage />}></Route>
        <Route path="userAndPets" element={<div>userAndPets</div>}></Route>
        <Route path="users" element={<div>Users</div>}>
           <Route path="signup" element={<div>Signup</div>} />
           <Route path="login" element={<div>Login</div>} />
           <Route path="edit" element={<div>Edit</div>}/>
           <Route path="logout" element={<div>Logout</div>}/>
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>

  );
};
