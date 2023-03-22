import PropTypes from 'prop-types';
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import plus from 'images/plus.svg';
import { Field, useFormikContext } from 'formik';

const CustomInputFile = ({
  id,
  name,
  plusSize = '30%',
  mb: marginbot = '20px',
  mx = 'auto',
  borderRadius = '40px',
  size,
  errPos = 'start',
  ...rest
}) => {
  const [image, setImage] = useState(null);
  const { values } = useFormikContext();

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    if (values.photo === null) {
      setImage(null);
    }
    if (values.photo !== null) {
      setImage(URL.createObjectURL(values.photo));
    }
  }, [values.photo]);

  return (
    <Field>
      {({ form }) => (
        <FormControl
          w={'full'}
          isInvalid={form.errors[name] && form.touched[name]}
          mb={
            form.errors[name] && form.touched[name]
              ? `calc(${marginbot} - 15px)`
              : marginbot
          }
        >
          <Box
            mx={mx}
            w={size}
            h={size}
            mb={form.errors[name] && form.touched[name] ? '1px' : 0}
            _focusWithin={{
              outline: '2px solid #FF6101',
              borderRadius: '20px',
            }}
          >
            <FormLabel htmlFor={id} m="0">
              {image ? (
                <Image
                  src={image}
                  w={size}
                  h={size}
                  border={'1px solid'}
                  borderColor={
                    form.errors[name] && form.touched[name]
                      ? '#E53E3E'
                      : 'transparent'
                  }
                  borderRadius={borderRadius}
                  alt="pet"
                ></Image>
              ) : (
                <Box
                  w={size}
                  h={size}
                  bgColor={'accent.background'}
                  borderRadius={borderRadius}
                  bgImage={plus}
                  bgRepeat={'no-repeat'}
                  bgPosition={'50% 50%'}
                  bgSize={plusSize}
                ></Box>
              )}
            </FormLabel>
            <VisuallyHiddenInput
              id={id}
              name={name}
              onChange={e => {
                form.setFieldValue(`${name}`, e.currentTarget.files[0]);
                if (form.touched[name] && form.errors[name]) {
                  return;
                }
                onImageChange(e);
              }}
              type="file"
              {...rest}
            />
          </Box>
          <FormErrorMessage fontSize="12px" justifyContent={errPos} mt={0}>
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomInputFile;

CustomInputFile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  plusSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  errPos: PropTypes.string,
};
