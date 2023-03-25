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
        display="flex"
        ml="30%"
        w="40%"
        h="550px"
        maxW={'none'}
        px={{ base: '5', md: '20' }}
        py={10}
        mt="10%"
        backgroundColor="#FDF7F2"
        borderRadius="25px"
        {...rest}
      >
        {title && (
          <ModalHeader
            mx={'auto'}
            p={'0'}
            fontSize="30px"
            fontWeight={'bold'}
            lineHeight={'short'}
            color={'accent.black'}
          >
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton
          top={5}
          right={5}
          display="flex"
          alignSelf="flex-end"
          w="2%"
          mr="5%"
          border="none"
          bg={'accent.background'}
        />
        <ModalBody p={'0'} display="flex" alignSelf="center" h="100%" w="200px">
          {children}
        </ModalBody>
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
