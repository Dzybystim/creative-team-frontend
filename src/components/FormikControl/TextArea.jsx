// import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

const CustomTextArea = ({ label, name, id, mb = '40px', ...rest }) => {
  return (
    <Field>
      {({ form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          w={{ base: '60', md: '394px' }}
          mb={
            form.errors[name] && form.touched[name] ? `calc(${mb} - 15px)` : mb
          }
        >
          {label ? (
            <FormLabel
              display={'inline-flex'}
              htmlFor={id}
              mb={{ base: '2', md: '3' }}
              fontSize={{ base: '18px', md: '2xl' }}
              mr="0"
            >
              {label}
            </FormLabel>
          ) : null}
          <Field
            as={Textarea}
            id={id}
            name={name}
            resize="none"
            variant="filled"
            h={{ base: '137px', md: '116px' }}
            p={{ base: '12px 14px', md: '16px 16px' }}
            mb={form.errors[name] && form.touched[name] ? '1px' : 0}
            fontSize={{ base: 'sm', md: 'md' }}
            bg="accent.background"
            border="1px solid rgba(245, 146, 86, 0.5)"
            borderRadius="20px"
            _placeholder={{ color: 'accent.black' }}
            {...rest}
          />
          <FormErrorMessage fontSize="xs" mt={0}>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomTextArea;

// CustomTextArea.propTypes = {
//   label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   mb: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.object,
//   ]),
// };
