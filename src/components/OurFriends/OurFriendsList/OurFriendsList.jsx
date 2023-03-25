import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { fetchOurFriends } from 'utilities/helpers';
import OurFriendsItem from '../OurFriendsItem/OurFriendsItem';
import css from './OurFriendsList.module.css';

const OurFriendsList = () => {
  const [loading, setLoading] = useState(false);
  const [ourFriends, setOurFriends] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchOurFriends()
      .then(setOurFriends)
      .catch(error => setErr(error.message))
      .finally(() => setLoading(false));
  }, []);
  // console.log(ourFriends);
  return (
    <>
      {loading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      {err && <h1>{err}</h1>}
      <ul className={css.list}>
        {ourFriends.length > 0 &&
          ourFriends.map(
            (
              {
                title,
                addressUrl,
                address,
                email,
                phone,
                url,
                workDays,
                imageUrl,
              },
              idx
            ) => (
              <OurFriendsItem
                key={idx}
                id={idx}
                adress={address}
                adressUrl={addressUrl}
                title={title}
                email={email}
                phone={phone}
                image={imageUrl}
                workdays={workDays}
                url={url}
              />
            )
          )}
      </ul>
    </>
  );
};

export default OurFriendsList;
