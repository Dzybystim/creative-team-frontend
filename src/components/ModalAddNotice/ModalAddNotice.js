import { useState } from 'react';
import { PageOne } from './ModalAddNoticeFirst';
import { PageTwo } from './ModalAddNoticeSecond';
import { postNewNotice } from '../../utilities/helpers';

//  category	обовʼязково обрано 1 з 3 категорій (sell, lost-found, for-free)

//  birthdate	дата в форматі 22.10.2022

//  sex	обовʼязково обрано 1 тип з 2 (male, female)
//  location	строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy

//  price	число, не повинно починатися 0

export const ModalAddNotice = ({ onClose }) => {
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
      console.log('finally', newData);
      postNewNotice(newData);
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

  console.log('data', data);

  return <div>{pages[currentPage]}</div>;
};

// const handleSubmit = (values, { resetForm }) => {
//   console.log('values ', values);
//   resetForm();
//   onClose();

// };
