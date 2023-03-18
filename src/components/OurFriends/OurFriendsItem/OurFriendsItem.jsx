import css from './OurFriendsItem.module.css';

const OurFriendsItem = ({ id, name, time, adress, email, phone, image }) => {
  return (
    <li key={id} className={css.item}>
      <h4 className={css.title}>{name}</h4>
      <div className={css.container}>
        <img src={image} alt={name} className={css.image} />

        <div className={css.textContainer}>
          <p className={css.text}>Time: {time}</p>
          <p className={css.text}>Adress: {adress}</p>
          <p className={css.text}>
            Email:
            <a href={`mailto:${email}`} className={css.link}>
              {email}
            </a>
          </p>
          <p className={css.text}>
            Phone:
            <a href={`tel:${phone}`} className={css.link}>
              {phone}
            </a>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsItem;
