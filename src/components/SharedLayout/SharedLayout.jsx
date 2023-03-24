import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Dna } from 'react-loader-spinner';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className={css.container_DNA}>
                <Dna
                visible={true}
                height="150"
                width= "150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
              />
        </div>
      }>
        <Outlet />
      </Suspense>
    </>
  );
}
