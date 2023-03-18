import { NavLink } from 'react-router-dom';

export const NoticesCategoriesNav = ({ item }) => {
  //  let isLoggin = useSelector();

  return (
    <>
      <li>
        <NavLink to="sell">sell</NavLink>
      </li>
      <li>
        <NavLink to="lost-found">lost/found</NavLink>
      </li>
      <li>
        <NavLink to="for-free">in good hands</NavLink>
      </li>

      {/* {isLoggin ? ( */}
      <>
        <li>
          <NavLink to="favorite">favorite ads</NavLink>
        </li>
        <li>
          <NavLink to="own">my ads</NavLink>
        </li>
      </>
      {/* ) : null} */}
    </>
  );
};
