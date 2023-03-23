import * as yup from 'yup';
import moment from 'moment/moment';

const regexName = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;
const regexBreed = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const FILE_SIZE = 1000000;

const addPetSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(regexName, 'Can only contain letters')
    .required('Required'),
  birthday: yup
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
  photo: yup
    .mixed()
    .test(
      'fileSize',
      'Only documents up to 1MB are permitted',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Unsupported file type',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .required('Required'),
  comments: yup.string().min(8).max(120).required('Required'),
});

export default addPetSchema;
