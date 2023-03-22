import PropTypes from 'prop-types';
import {
  CustomInput,
  CustomTextArea,
  CustomEditable,
  CustomInputFile,
  SexRadio,
  CategoryRadio,
} from './index';

const FormikControl = ({ control = 'input', ...rest }) => {
  switch (control) {
    case 'input':
      return <CustomInput {...rest} />;
    case 'textarea':
      return <CustomTextArea {...rest} />;
    case 'editable':
      return <CustomEditable {...rest} />;
    case 'file':
      return <CustomInputFile {...rest} />;
    case 'sex-radio':
      return <SexRadio {...rest} />;
    case 'category-radio':
      return <CategoryRadio {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;

FormikControl.propTypes = {
  control: PropTypes.oneOf([
    'input',
    'textarea',
    'editable',
    'file',
    'sex-radio',
    'category-radio',
  ]),
};
