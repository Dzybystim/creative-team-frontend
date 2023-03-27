import PropTypes from 'prop-types';
import {
  Box,
  FormControl,
  FormLabel,
  Editable,
  EditableInput,
  EditablePreview,
  FormErrorMessage,
  IconButton,
  useEditableControls,
} from '@chakra-ui/react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons';
import { Field } from 'formik';

const CustomEditable = ({
  label,
  name,
  id,
  defaultValue,
  mb = '16px',
  ...rest
}) => {
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getEditButtonProps } =
      useEditableControls();

    return isEditing ? (
      <IconButton
        minW={'none'}
        w={{ base: '5', md: '8' }}
        h={{ base: '5', md: '8' }}
        bg="accent.background"
        color="accent.accentOrange"
        borderRadius="50%"
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
    ) : (
      <IconButton
        minW={'none'}
        w={{ base: '5', md: '8' }}
        h={{ base: '5', md: '8' }}
        bg="accent.background"
        color="rgba(17, 17, 17, 0.6);"
        borderRadius="50%"
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    );
  }

  return (
    <Box w={{ base: '252px', md: '379px' }} mb={mb}>
      <Field>
        {({ form }) => (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <Editable
              defaultValue={defaultValue}
              display="flex"
              alignItems="center"
            >
              <FormLabel
                display="inline-flex"
                htmlFor={id}
                fontSize={{ base: 'xs', md: '18px' }}
                lineHeight={'short'}
                letterSpacing={'0.04em'}
                fontWeight={'medium'}
                alignItems="center"
                m="0"
                h={{ base: '6', md: '8' }}
                w={{ base: '14', md: '83px' }}
                mr={{ base: '9px', md: '6' }}
              >
                {label}
              </FormLabel>
              <EditablePreview
                w={{ base: '159px', md: '216px' }}
                h={{ base: '6', md: '8' }}
                p={{ base: '4px 18px', md: '4px 12px' }}
                fontSize={{ base: 'xs', md: '18px' }}
                letterSpacing={'0.04em'}
                lineHeight={'short'}
                border="1px solid transparent"
                mr={{ base: '9px', md: '6' }}
              />
              <Field
                as={EditableInput}
                id={id}
                name={name}
                variant="filled"
                h={{ base: '6', md: '32px' }}
                w={{ base: '159px', md: '216px' }}
                p={{ base: '4px 18px', md: '4px 12px' }}
                mr={{ base: '9px', md: '24px' }}
                fontSize={{ base: '12px', md: '18px' }}
                letterSpacing={'0.04em'}
                lineHeight={'short'}
                bg="accent.background"
                border="1px solid rgba(245, 146, 86, 0.5)"
                borderRadius="40px"
                _placeholder={{ color: 'accent.black' }}
                {...rest}
              />
              <EditableControls />
              <FormErrorMessage fontSize="12px">
                {form.errors[name]}
              </FormErrorMessage>
            </Editable>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};

export default CustomEditable;

// CustomEditable.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   defaultValue: PropTypes.string.isRequired,
//   mb: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.object,
//   ]),
// };
