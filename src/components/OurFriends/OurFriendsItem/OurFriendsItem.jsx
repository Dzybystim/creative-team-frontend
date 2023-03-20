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

  const toggleModal = evt => {
    setShowMenu(!showMenu);
  };

  const getCurrentDate = new Date();

  let daysList = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  let index = '';

  getCurrentDate.getDay() === 0
    ? (index = 6)
    : (index = getCurrentDate.getDay() - 1);

  const currentHour = getCurrentDate.getHours();

  const isOpenNow = () => {
    if (workdays === null) {
      return (
        <p className={css.empty}>
          <span>Time: </span> ----------------------------------
        </p>
      );
    }
    if (workdays[index] !== undefined && workdays[index].isOpen) {
      return (
        <>
          <p
            className={!showMenu ? css.isOpen : css.textTimeActive}
            onClick={toggleModal}
          >
            <span>Time: </span>
            {`${workdays[index].from} : ${workdays[index].to}`}
          </p>
          {currentHour >= workdays[index].from.split(':')[0] &&
          currentHour < workdays[index].to.split(':')[0] ? (
            <span className={css.statusOpened}>is Opened now</span>
          ) : (
            <p>
              <span className={css.statusClosed}>is Closed now</span>
            </p>
          )}
        </>
      );
    }
    return (
      <>
        <p
          className={!showMenu ? css.isClosed : css.textTimeActive}
          onClick={toggleModal}
        >
          <span>Time: </span>
          Is closed today
        </p>
      </>
    );
  };

  return (
    <li key={id} className={css.item}>
      <h4 className={css.title}>
        <a
          href={url}
          rel={'noreferrer'}
          target={'_blank'}
          className={css.titleLink}
        >
          {title}
        </a>
      </h4>
      <div className={css.container}>
        <div className={css.imageContainer}>
          <img src={image} alt={image} className={css.image} />
        </div>

        <div className={css.textContainer}>
          <h4 className={!showMenu ? css.textTime : css.textTimeActive}>
            {' '}
            {isOpenNow()}
            {showMenu && (
              <WorkingDaysMenu
                onClose={toggleModal}
                daysList={daysList}
                workdays={workdays}
              />
            )}
          </h4>
          {adress ? (
            <p className={css.text}>
              <span>Adress:</span>
              <a
                href={adressUrl}
                rel={'noreferrer'}
                target={'_blank'}
                className={css.adressLink}
              >
                {adress}
              </a>
            </p>
          ) : (
            <p className={css.empty}>
              Adress: <span>----------------------------------</span>
            </p>
          )}
          {email ? (
            <p className={css.text}>
              <span> Email:</span>
              <a href={`mailto:${email}`} className={css.link}>
                {email}
              </a>
            </p>
          ) : (
            <p className={css.empty}>
              Email: <span>----------------------------------</span>
            </p>
          )}
          {phone ? (
            <p className={css.text}>
              <span> Phone:</span>
              <a href={`tel:${phone}`} className={css.link}>
                {phone}
              </a>
            </p>
          ) : (
            <p className={css.empty}>
              Phone: <span>----------------------------------</span>
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default OurFriendsItem;
