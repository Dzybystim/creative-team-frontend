///import { Formik, ErrorMessage, Form, Field } from 'formik';
//import css from "./ModalAddNotice.module.css";

export const ModalAddNoticeSecond = ({ toggleModalPage, onSubmit }) => {
  return (
    <>
      <button type="submit" onSubmit={onSubmit}>
        Done
      </button>
      <button onClick={toggleModalPage} type="submit">
        Back
      </button>
    </>
  );
};
