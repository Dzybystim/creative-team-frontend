import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const CustomButton = ({ children, controle = 'primary', ...rest }) => {
  return (
    <Button
      type={'button'}
      width={'full'}
      height={{ base: '10', md: '44px', xl: '12' }}
      py={{ base: '2', md: '2.5' }}
      px={7}
      bg={controle === 'secondary' ? 'accent.accentOrange' : 'white'}
      color={controle === 'secondary' ? 'white' : 'accent.black'}
      border={'2px solid'}
      borderColor={'accent.accentOrange'}
      borderRadius={'40px'}
      fontSize={{ base: 'md', md: 'xl' }}
      fontWeight={'medium'}
      letterSpacing={'0.04em'}
      lineHeight={{ base: 'short', md: '1.35' }}
      _hover={{
        bg: `${controle === 'secondary' ? 'white' : 'accent.accentOrange'}`,
        color: `${controle === 'secondary' ? 'accent.black' : 'white'}`,
      }}
      _focus={{ bg: 'accent.accentOrange', color: 'white' }}
      aria-label="button"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
  controle: PropTypes.oneOf(['secondary', 'primary']),
};
