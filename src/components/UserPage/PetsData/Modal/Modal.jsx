import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const CustomModal = ({ isOpen, onClose, title, children, ...rest }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg={'rgba(17, 17, 17, 0.6);'} />
      <ModalContent
        w={{ base: '280px', md: '608px' }}
        maxW={'none'}
        px={{ base: '5', md: '20' }}
        py={10}
        borderRadius={{ base: '20px', md: '40px' }}
        {...rest}
      >
        {title && (
          <ModalHeader
            mx={'auto'}
            mb={{ base: '5', md: '10' }}
            p={'0'}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'accent.black'}
          >
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton
          width={{ base: '34px', md: '44px' }}
          height={{ base: '34px', md: '44px' }}
          top={5}
          right={5}
          bg={'accent.background'}
          borderRadius={'50%'}
          _hover={{ backgroundColor: 'accent.accentOrange' }}
          _focus={{ backgroundColor: 'accent.accentOrange' }}
        />
        <ModalBody p={'0'}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;

CustomModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
