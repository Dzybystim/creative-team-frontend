import { useEffect } from 'react';
import css from './WorkingDaysMenu.module.css';

const WorkingDaysMenu = ({ onClose, daysList, workdays }) => {
  const handleBackdropClick = evt => {
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    });
  });

  return (
    <div>
      <figure className={css.overlay} onClick={handleBackdropClick}>
        {' '}
      </figure>
      <ul className={css.menu}>
        {daysList.map((el, idx) => (
          <li className={css.item} key={idx}>
            {workdays[idx].isOpen
              ? `${el}${' '}${workdays[idx].from}-${workdays[idx].to}`
              : `${el} is closed`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingDaysMenu;
