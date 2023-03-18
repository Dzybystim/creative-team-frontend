import { useState } from 'react';
import { Dna } from 'react-loader-spinner';
import OurFriendsItem from '../OurFriendsItem/OurFriendsItem';

import tempImage from './pets.jpg';

const tempFriends = [
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
  {
    name: 'Awesome Pets',
    time: '00:00 - 24:00',
    adress: 'Highway to Heaven 777',
    email: 'lucky777@gmail.com',
    phone: '+380677777777',
    image: tempImage,
  },
];

const OurFriendsList = () => {
  const [loading] = useState(false);

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
      <ul>
        {tempFriends.length > 0 &&
          tempFriends
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, time, adress, email, phone, image }, idx) => (
              <OurFriendsItem
                id={idx}
                name={name}
                time={time}
                adress={adress}
                email={email}
                phone={phone}
                image={image}
              />
            ))}
      </ul>
    </>
  );
};

export default OurFriendsList;
