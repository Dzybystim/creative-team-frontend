import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const CardButton = ({ children, controle, ...rest }) => {
  return (
    <Button
      type={'button'}
      width={'full'}
      maxWidth={'248px'}
      height={'38px'}
      rightIcon={
        controle === 'delete' && <DeleteIcon w={'18px'} h={'18px'} ml={'5px'} />
      }
      py={2}
      px={8}
      bg={'white'}
      color={'accent.100'}
      border={'2px solid'}
      borderColor={'accent.100'}
      borderRadius={'40px'}
      fontSize={'md'}
      fontWeight={'medium'}
      letterSpacing={'0.04em'}
      lineHeight={'short'}
      _hover={{ borderColor: '#FF6101', color: '#FF6101' }}
      _focus={{ borderColor: '#FF6101', color: '#FF6101' }}
      aria-label="card button"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CardButton;

CardButton.propTypes = {
  children: PropTypes.node,
  controle: PropTypes.oneOf(['delete']),
};
