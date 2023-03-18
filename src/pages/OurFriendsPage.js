// import css from './OurFriendsPage.module.css';
import OurFriendsIcons from 'components/OurFriends/OurFriendsIcons/OurFriendsIcons';
import OurFriendsList from 'components/OurFriends/OurFriendsList/OurFriendsList';

const OurFriendsPage = () => {
  return (
    <div>
      <OurFriendsIcons />
      <h3>Our friends</h3>
      <OurFriendsList />
    </div>
  );
};

export default OurFriendsPage;
