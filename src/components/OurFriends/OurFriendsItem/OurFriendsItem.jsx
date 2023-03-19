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

  const currentHour = getCurrentDate.getHours();
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
          {currentHour >= workdays[index].from.split(':')[0] &&
          currentHour < workdays[index].to.split(':')[0] ? (
            <span className={css.statusOpened}>is Opened now</span>
          ) : (
            <span className={css.statusClosed}>is Closed now</span>
          )}
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
        <div className={css.imageContainer}>
          <img src={image} alt={image} className={css.image} />
        </div>

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
            <span className={css.text_span}>
              {' '}
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
            </span>
          </p>
          <p className={css.text}>
            Email:
            <span className={css.text_span}>
              {' '}
              {email ? (
                <a href={`mailto:${email}`} className={css.link}>
                  {email}
                </a>
              ) : (
                '----------------------------------'
              )}
            </span>
          </p>
          <p className={css.text}>
            Phone:
            <span className={css.text_span}>
              {' '}
              {phone ? (
                <a href={`tel:${phone}`} className={css.link}>
                  {phone}
                </a>
              ) : (
                '----------------------------------'
              )}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsItem;
