import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const AddPetButton = ({ onClick, size = '40px', ...rest }) => {
  return (
    <IconButton
      type={'button'}
      onClick={onClick}
      aria-label="Add pet"
      w={size}
      h={size}
      minWidth={size}
      borderRadius={'50%'}
      backgroundColor={'accent.accentOrange'}
      icon={<AddIcon color={'white'} />}
      _hover={{ backgroundColor: '#FF6101' }}
      _focus={{ backgroundColor: '#FF6101' }}
      {...rest}
    ></IconButton>
  );
};

export default AddPetButton;

AddPetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
