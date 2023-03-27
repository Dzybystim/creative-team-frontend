import * as yup from 'yup';
import moment from 'moment/moment';

const regexName = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;
const regexBreed = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;

const addPetSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(regexName, 'Can only contain letters')
    .required('Required'),
  date: yup
    .date()
    .min(moment('06021995', 'DDMMYYYY'), 'Must be at later than 06.02.1995')
    .max(
      moment(),
      `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`
    )
    .required('Required'),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(regexBreed, 'Can only contain letters')
    .required('Required'),
  photoURL: yup.string(),
  comments: yup.string().min(8).max(120).required('Required'),
});

export default addPetSchema;
