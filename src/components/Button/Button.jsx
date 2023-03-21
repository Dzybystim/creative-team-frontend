import scss from './Button.module.css';

const Button = ({
  customStyle,
  buttonName,
  buttonIcon,
  type = 'button',
  onClick,
}) => {
  return (
    <>
      <button
        className={scss.button + ' ' + customStyle}
        type={type}
        onClick={onClick}
      >
        {buttonName}
        {buttonIcon}
      </button>
    </>
  );
};

export default Button;
