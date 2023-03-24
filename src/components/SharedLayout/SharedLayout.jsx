import { Outlet} from 'react-router-dom';
import {Header} from '../Header/Header'

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
