import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import PetsList from '../PetsList/PetsList';
import { Modal } from '../../../utilities/Modal/Modal';
import { ModalAddsPet } from 'components/UserPage/PetsData/ModalAddsPet';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const PetsData = ({ pets }) => {
  // const { onOpen, onClose, isOpen } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box ml={{ xl: '32px' }} w="100%">
      <Flex
        direction="row"
        justifyContent="space-between"
        pt={{ base: '40px', md: '20px', xl: '0px' }}
        mb={{ base: '26px', md: '22px', xl: '24px' }}
      >
        {' '}
        <Button
          aria-label="add pet"
          onClick={toggleModal}
          rightIcon={
            <BsFillPlusCircleFill size="20px" fill="#e08f64" m="0px" />
          }
          bg="transparent"
          fontSize={{ base: '20px', md: '28px' }}
          color="black"
          lineHeight={{ base: '1.35' }}
          fontWeight={{ base: '500' }}
          type="button"
          px="0px"
          border="none"
          // _hover={{ color: 'accent.accentOrange' }}
          // transitionProperty={'color'}
          transitionDuration={'250ms'}
          transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        >
          <Text mr="0.5px" ml="15px">
            Add pet
          </Text>
        </Button>
      </Flex>
      <PetsList pets={pets} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalAddsPet onClose={toggleModal} />
        </Modal>
      )}
    </Box>
  );
};

export default PetsData;
