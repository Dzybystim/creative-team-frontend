import { useEffect } from 'react';
import css from './WorkingDaysMenu.module.css';

const WorkingDaysMenu = ({ onClose, daysList, workdays }) => {
  const handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    });
  });

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <ul className={css.menu}>
        {daysList.map((el, idx) => (
          <li className={css.item}>
            {workdays[idx].isOpen
              ? `${el}${' '}${workdays[idx].from} - ${workdays[idx].to}`
              : `${el} is closed`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingDaysMenu;
