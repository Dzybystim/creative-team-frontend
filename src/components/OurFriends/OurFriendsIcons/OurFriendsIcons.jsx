import css from './OurFriendsIcons.module.css';

import BurgerMenu from './BurgerMenu';

const OurFriendsIcons = () => {
  return (
    <div className={css.iconContainer}>
      <p className={css.logo}>
        pe<span className={css.letter}>t</span>ly
      </p>
      <BurgerMenu />
    </div>
  );
};

export default OurFriendsIcons;
