
import { useState } from 'react';
import { PageOne } from './ModalAddNoticeFirst';
import { PageTwo } from './ModalAddNoticeSecond';

//  category	обовʼязково обрано 1 з 3 категорій (sell, lost-found, for-free)

//  birthdate	дата в форматі 22.10.2022

//  sex	обовʼязково обрано 1 тип з 2 (male, female)
//  location	строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy 

//  price	число, не повинно починатися 0 

  
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
  //  imageURL: '',
    comments: '',
    price: '',
  });

  const [currentPage, setCurrentPage] = useState(0);

  const makeRequest = (formData) =>{
    console.log("Form Submitted", formData);
  }

  const handleNextPage = (newData, final = false) => {
    setData((prev)=>({...prev, ...newData}));

    if (final){
      makeRequest(newData);
      return;
    }

    setCurrentPage((prev)=>prev + 1);
  };
  const handlePrevPage = (newData) => {
    setData((prev)=>({...prev, ...newData}));
    setCurrentPage((prev)=>prev - 1);
  };

  const pages = [
    <PageOne next={handleNextPage} data={data} onClose={onClose}/>,
    <PageTwo next={handleNextPage} prev={handlePrevPage} data={data} onClose={onClose}/>
  ];

  console.log("data", data);

return <div>{pages[currentPage]}</div>
}





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


