
//    // const contacts = useSelector(selectContacts);
//  //   const dispatch = useDispatch();

//     const handleSubmit = (value, { resetForm }) => {
//      // const ContactValue = value.name;
//   console.log(value);
//     //   if (
//     //     contacts.find(
//     //       contact => contact.name.toLowerCase() === ContactValue.toLowerCase()
//     //     ))


//     //   dispatch(addContact(newContact));
//     //   toast.success(`${ContactValue} is added to the phonebook.`);
//       resetForm();
//       onClose();
//     };


import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { ModalAddNoticeFirst } from './ModalAddNoticeFirst';
import { ModalAddNoticeSecond } from './ModalAddNoticeSecond';

 import css from "./ModalAddNotice.module.css";

// const schema = yup.object().shape({
//     category: yup.string().required(),
//     title: yup.string().required(),
//     name: yup.string().required(),
//     birthdate: yup.number().min(8).required(),
//     breed: yup.number().min(8).required(),
//     sex: yup.number().min(8).required(),
//     location: yup.number().min(8).required(),
//     file: yup.number().min(8).required(),
//     comments: yup.number().min(8).required(),
//     price: yup.number().min(8).required(),
//   });


const initialValues= {
  category: '',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: '',
  location: '',
  file: '',
  comments: '',
  price: '',
}

  

//   const FormError = ({ name }) => {
//     return (
//       <ErrorMessage
//         name={name}
//         render={message => <div>{message}</div>}
//       />
//     );
//   };

export const ModalAddNotice = ({ onClose }) => {
  const [togglePage, setTogglePage] = useState(true);

  const toggleModalPage = () => {
    // if (!name || !birthday || !breed) {

    // }
    setTogglePage(!togglePage);
  };

  // const contacts = useSelector(selectContacts);
  //   const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
 
    const newPet = {
      category: value.category,
      title: value.title,
      name: value.name,
      birthdate: value.birthdate,
      breed: value.breed,
      sex: value.sex,
      location: value.location,
      file: value.file,
      comments: value.comments,
      price: value.price,
    };

    console.log('newPet ', newPet);
    resetForm();
    onClose();
    
    //   dispatch(addContact(newContact));
    //   toast.success(`${ContactValue} is added to the phonebook.`);
    
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add pet</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        //    validationSchema={schema}
      >
        <Form autoComplete="off">
          {togglePage ? (
            <ModalAddNoticeFirst
              onClose={onClose}
              toggleModalPage={toggleModalPage}
            />
          ) : (
            <ModalAddNoticeSecond
              toggleModalPage={toggleModalPage}
              onSubmit={handleSubmit}
   //  formik={formik}
            />
          )}
        </Form>
      </Formik>
    </div>
  );
};


