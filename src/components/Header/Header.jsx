import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Views.styled';

import css from './Header.module.css';

// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

export const Header = () => {
  // const isLooggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      {' '}
      <Container>
        <div className={css.headerContainer}></div><HeaderContainer>
          <Nav />
          {isLooggedIn ? <UserNav /> : <AuthNav />}
        </HeaderContainer>
      </Container>
    </Header>
  );
};
