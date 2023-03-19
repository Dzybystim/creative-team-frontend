import { useState } from 'react';
import WorkingDaysMenu from '../WorkingDaysMenu/WorkingDaysMenu';
import css from './OurFriendsItem.module.css';

const OurFriendsItem = ({
  id,
  title,
  adressUrl,
  adress,
  email,
  phone,
  image,
  workdays = [],
  url,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleModal = evt => setShowMenu(!showMenu);

  const getCurrentDate = new Date();

  let daysList = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  let index = '';

  getCurrentDate.getDay() === 0
    ? (index = 6)
    : (index = getCurrentDate.getDay() - 1);

  // let currentDay = daysList[index];

  const isOpenNow = () => {
    if (workdays === null) {
      return <p> ----------------------------------</p>;
    }
    if (workdays[index] !== undefined && workdays[index].isOpen) {
      return (
        <>
          <p
            className={css.isOpen}
            onClick={toggleModal}
          >{`${workdays[index].from} : ${workdays[index].to}`}</p>
        </>
      );
    }
    return (
      <>
        <p className={css.isClosed} onClick={toggleModal}>
          Is closed today
        </p>
      </>
    );
  };

  return (
    <li key={id} className={css.item}>
      <h4 className={css.title}>
        <a href={url} className={css.titleLink}>
          {title}
        </a>
      </h4>
      <div className={css.container}>
        <img src={image} alt={title} className={css.image} />

        <div className={css.textContainer}>
          <h4 className={css.text}>
            Time: {isOpenNow()}
            {showMenu && (
              <WorkingDaysMenu
                onClose={toggleModal}
                daysList={daysList}
                workdays={workdays}
              />
            )}
          </h4>

          <p className={css.text}>
            Adress:{' '}
            {adress ? (
              <a
                href={adressUrl}
                rel={'noreferrer'}
                target={'_blank'}
                className={css.adressLink}
              >
                {adress}
              </a>
            ) : (
              '----------------------------------'
            )}
          </p>
          <p className={css.text}>
            Email:
            <a href={`mailto:${email}`} className={css.link}>
              {email ? email : '----------------------------------'}
            </a>
          </p>
          <p className={css.text}>
            Phone:
            <a href={`tel:${phone}`} className={css.link}>
              {phone ? phone : '----------------------------------'}
            </a>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsItem;
