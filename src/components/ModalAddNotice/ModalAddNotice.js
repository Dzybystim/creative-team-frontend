import { useState } from 'react';
// import * as Yup from 'yup';
import { PageOne } from './ModalAddNoticeFirst';
import { PageTwo } from './ModalAddNoticeSecond';
import { postNewNotice } from '../../utilities/helpers';
//import * as yup from 'yup';

//  category	обовʼязково обрано 1 з 3 категорій (sell, lost-found, for-free)

//  birthdate	дата в форматі 22.10.2022

//  sex	обовʼязково обрано 1 тип з 2 (male, female)
//  location	строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy

//  price	число, не повинно починатися 0

// const schema = yup.object().shape({
//   category: yup
//     .string()
//     .oneOf(['lost-found', 'for-free', 'sell'])
//     .required('Be sure to choose 1 of the 3 categories!'),
//   title: yup
//     .string()
//     .min(2, 'Minimum 2 characters!')
//     .max(48, 'Maximum 48 characters!')
//     .required('Required field!'),
//   name: yup
//     .string()
//     .min(2, 'Minimum 2 characters!')
//     .max(16, 'Maximum 16 characters!')
//     .required('Required field!'),
//   birthdate: yup.date().max(new Date()).required('Required field!'),
//   breed: yup
//     .string()
//     .min(2, 'Minimum 2 characters!')
//     .max(24, 'Maximum 24 characters!')
//     .required('Required field!'),
//   sex: yup
//     .mixed()
//     .oneOf(['male', 'female'])
//     .defined()
//     .required('Required field!'),
//   location: yup
//     .string()
//     .min(5, 'Minimum 5 characters!')
//     .max(60, 'Maximum 60 characters!')
//     .required('Required field!'),
//   //  imageURL: yup.number().min(8).required(),
//   comments: yup
//     .string()
//     .min(8, 'Minimum 8 characters!')
//     .max(120, 'Maximum 120 characters!')
//     .required('Required field!'),
//   price: yup.string().when('category', {
//     is: category => category === 'sell',
//     then: yup
//       .string()
//       .matches(/^[1-9]$/)
//       .required('Required field!'),
//   }),
// });

//   sex: yup
//   .mixed()
//   .oneOf(['male', 'female', 'other'] as const)
//   .defined(),
// email: yup.string().nullable().email(),
// birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),

//   const FormError = ({ name }) => {
//     return (
//       <ErrorMessage
//         name={name}
//         render={message => <div>{message}</div>}
//       />
//     );
//   };

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

  // const makeRequest = formData => {
  //   console.log('Form Submitted', formData);
  // };

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

//   const newPet = {
//     category: values.category,
//     title: values.title,
//     name: values.name,
//     birthdate: values.birthdate,
//     breed: values.breed,
//     sex: values.sex,
//     location: values.location,
//     imageURL: values.imageURL,
//     comments: values.comments,
//     price: values.price,
//   };

//   console.log('newPet ', newPet);
//   resetForm();
//   onClose();

// };
