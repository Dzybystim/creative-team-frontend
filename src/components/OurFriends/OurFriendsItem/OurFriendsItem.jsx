import css from './OurFriendsItem.module.css';

const OurFriendsItem = ({ id, name, time, adress, email, phone, image }) => {
  return (
    <li key={id} className={css.item}>
      <h4 className={css.title}>{name}</h4>
      <img src={image} alt={name} className={css.image} />
      <div className={css.textContainer}>
        <p>Time: {time}</p>
        <p>Adress: {adress}</p>
        <p>
          Email:
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Phone:
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </li>
  );
};

export default OurFriendsItem;
