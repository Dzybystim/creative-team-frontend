// import { useState } from 'react';
// import css from './ModalAddNotice.module.css';

// export const ModalAddNotice = ({onClose}) => {

//     const [togglePage, setTogglePage] = useState(true);

//     const toggleModalPage = () => {
//         // if (!name || !birthday || !breed) {

//         // }
//         setTogglePage(!togglePage);
//     };

//    // const contacts = useSelector(selectContacts);
//  //   const dispatch = useDispatch();

//     const handleSubmit = (value, { resetForm }) => {
//      // const ContactValue = value.name;
//   console.log(value);
//     //   if (
//     //     contacts.find(
//     //       contact => contact.name.toLowerCase() === ContactValue.toLowerCase()
//     //     ))

//     //    {
//     //    // toast.error(`${ContactValue} is already in contacts.`);
//     //     return;
//     //   }

//       const newPet = {
//     name: value.name,
//     birthday: value.birthday,
//     breed: value.breed,
//     photo: value.photo,
//     comments: value.comments,
//       };
//       console.log("newPet ", newPet);

//     //   dispatch(addContact(newContact));
//     //   toast.success(`${ContactValue} is added to the phonebook.`);
//       resetForm();
//       onClose();
//     };

//     return (
// <div className={css.container}>
//         <h1 className={css.title}>Add pet</h1>
// <Formik
//           onSubmit={handleSubmit}
//           initialValues={initialValues}
//       //    validationSchema={schema}
//         >

//           <Form autoComplete="off">

//             {togglePage ? <ModalAddNoticeFirst onClose={onClose} toggleModalPage={toggleModalPage}/> : <ModalAddNoticeSecond toggleModalPage={toggleModalPage} onSubmit={handleSubmit}/>}

//           </Form>
//         </Formik>

// </div>
//  )
//  }
