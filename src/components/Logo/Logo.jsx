import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.iconContainer}>
      <p className={css.logo}>
        pe<span className={css.letter}>t</span>ly
      </p>
    </div>
  );
};
