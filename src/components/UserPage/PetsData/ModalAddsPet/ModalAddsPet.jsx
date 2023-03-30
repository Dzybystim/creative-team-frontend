import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPet } from 'redux/auth/operations';
import { FirstPage } from './ModalAddsPetFirst';
import { SecondPage } from './ModalAddsPetSecond';
import moment from 'moment/moment';

const ModalAddsPet = ({ onClose, setAddPet, addPet }) => {
  const [firstStep, setFirstStep] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    breed: 'Dog',
    name: '',
    date: '',
    photoURL: '',
    comments: '',
  });

  const handleNextPage = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      const birthdate = moment(newData.date, 'YYYYY-MM-DD').format(
        'DD.MM.YYYY'
      );
      const petsData = {
        name: newData.name,
        date: birthdate,
        breed: newData.breed,
        photoURL: newData.photoURL,
        comments: newData.comments,
      };
      dispatch(addNewPet(petsData));
      setAddPet(!addPet);
      return;
    }
    setFirstStep(false);
  };

  const handlePrevPage = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setFirstStep(true);
  };

  return (
    <>
      {firstStep ? (
        <FirstPage next={handleNextPage} data={data} onClose={onClose} />
      ) : (
        <SecondPage
          next={handleNextPage}
          prev={handlePrevPage}
          data={data}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default ModalAddsPet;
