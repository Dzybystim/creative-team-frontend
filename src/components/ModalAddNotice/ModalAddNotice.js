import PropTypes from 'prop-types'; 
import { useState } from 'react';
import { PageOne } from './ModalAddNoticeFirst';
import { PageTwo } from './ModalAddNoticeSecond';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNotice } from '../../redux/notices/operations';

export const ModalAddNotice = ({ onClose }) => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    birthdate: '',
    breed: '',
    sex: '',
    location: '',
    imageURL: '',
    comments: '',
    price: '',
  });

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      if (newData.price === '') {
        const newNotices = {
          category: newData.category,
          title: newData.title,
          name: newData.name,
          birthdate: newData.birthdate,
          breed: newData.breed,
          sex: newData.sex,
          location: newData.location,
          imageURL: newData.imageURL,
          comments: newData.comments,
        };
        dispatch(addNotice(newNotices));
        navigete('/notices/own');
        return;
      }
      const newNotices = {
        category: newData.category,
        title: newData.title,
        name: newData.name,
        birthdate: newData.birthdate,
        breed: newData.breed,
        sex: newData.sex,
        location: newData.location,
        imageURL: newData.imageURL,
        comments: newData.comments,
        price: newData.price,
      };
      dispatch(addNotice(newNotices));
      navigete('/notices/own');
      return;
    }
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentPage(prev => prev - 1);
  };

  const pages = [
    <PageOne next={handleNextPage} data={data} onClose={onClose} />,
    <PageTwo
      next={handleNextPage}
      prev={handlePrevPage}
      data={data}
      onClose={onClose}
    />,
  ];

  return <div>{pages[currentPage]}</div>;
};


ModalAddNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
};