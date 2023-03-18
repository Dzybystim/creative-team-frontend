import css from './OurFriendsPage.module.css';
import OurFriendsIcons from 'components/OurFriends/OurFriendsIcons/OurFriendsIcons';
import OurFriendsList from 'components/OurFriends/OurFriendsList/OurFriendsList';

const OurFriendsPage = () => {
  return (
    <div className={css.container}>
      <OurFriendsIcons />
      <h3 className={css.title}>Our friends</h3>
      <OurFriendsList />
    </div>
  );
};

export default OurFriendsPage;
