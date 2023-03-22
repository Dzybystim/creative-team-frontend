import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectors } from 'redux/auth/selectors';
import { Header } from '../Header/Header';

export default function SharedLayout() {
  const value = useSelector(selectors.getToken);
  console.log(value);
  const tokenlocal = localStorage.getItem('persist:users');
  console.log('tokenlocal:', JSON.parse(tokenlocal));

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
