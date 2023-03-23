import { List, ListItem, Box, Text, Flex, Image } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import petDefaultAvatar from '../../../images/petDefaultAvatar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deletePet } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

const PetsList = ({pets}) => {

  // const { pets = [] } = useSelector(getUser);

  const dispatch = useDispatch();
  const onDeleteBtnClick = (e, id) => {
    dispatch(deletePet(id));
    e.preventDefault();
  };
  return pets.length > 0 ? (
    <Box>
      {pets.map(({ _id, name, birthday, breed, photo, comments }) => (
        <Flex
          key={_id}
          bgColor="accent.white"
          box-shadow="7px 4px 14px rgba(0, 0, 0, 0.11)"
          borderRadius="40px"
          direction={{ base: 'column', md: 'row', xl: 'row' }}
          mb={{ base: '20px', xl: '22px' }}
          px={{ base: '20px', md: '20px', xl: '28px' }}
          py={{ base: '40px', md: '20px', xl: '20px' }}
        >
          <Box
            w={{ base: '240px', md: '161px' }}
            h={{ base: '240px', md: '161px' }}
            mr={{ base: '0px', md: '32px' }}
            bgColor="accent.background"
            borderRadius={{ base: '40px', md: '20px' }}
          >
            <Image
              display="block"
              maxW="initial"
              boxSize={{ base: '240px', md: '161px' }}
              borderRadius={{ base: '40px', md: '20px' }}
              src={photo ?? petDefaultAvatar}
              alt="pet photo"
            />
          </Box>
          <Box
            position="relative"
            w="100%"
            maxW={{ base: '235px', md: '471px', xl: '580px' }}
            mt={{ base: '20px', md: '0px' }}
          >
            <Box
              onClick={e => onDeleteBtnClick(e, _id)}
              as="button"
              type="button"
              position="absolute"
              top={{ base: '-4px', md: '0px' }}
              right="0px"
              bg={{ base: 'transparent', md: 'accent.background' }}
              w={{ base: '20px', md: '44px' }}
              h={{ base: '20px', md: '44px' }}
              borderRadius="50%"
              size="44px"
              color="rgba(17, 17, 17, 0.6)"
              _hover={{
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                color: 'accent.accentOrange',
              }}
              _focus={{
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                color: 'accent.accentOrange',
              }}
              transitionProperty={'color, filter'}
              transitionDuration={'250ms'}
              transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
            >
              <DeleteIcon
                h={{ base: '20px', md: '24px' }}
                w={{ base: '20px', md: '24px' }}
                color="inherit"
              />
            </Box>
            <List>
              <ListItem
                display="flex"
                alignItems="center"
                mb={{ base: '20px', xl: '22px' }}
              >
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="600"
                  display="block"
                  mr="5px"
                >
                  Name:
                </Text>
                <Text fontWeight="400">{name}</Text>
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                mb={{ base: '20px', xl: '22px' }}
              >
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="600"
                  display="block"
                  mr="5px"
                >
                  Date of birth:
                </Text>
                <Text fontWeight="400">{birthday}</Text>
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                mb={{ base: '20px', xl: '22px' }}
              >
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="600"
                  display="block"
                  mr="5px"
                >
                  Breed:
                </Text>
                <Text fontWeight="400">{breed}</Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="600"
                  display="block"
                  mr="5px"
                >
                  Comments:
                </Text>
                <Text
                  fontWeight="400"
                  lineHeight={{ base: '1.57', md: '1.35' }}
                >
                  {comments}
                </Text>
              </ListItem>
            </List>
          </Box>
        </Flex>
      ))}
    </Box>
  ) : (
    <Flex
      bgColor="accent.white"
      box-shadow="7px 4px 14px rgba(0, 0, 0, 0.11)"
      borderRadius="40px"
      direction={{ base: 'column', md: 'row', xl: 'row' }}
      mb={{ base: '20px', xl: '22px' }}
      px={{ base: '20px', md: '20px', xl: '28px' }}
      py={{ base: '40px', md: '20px', xl: '20px' }}
      w={{ base: '280px', md: '704px', xl: '821px' }}
    >
      <Text mx="auto"> You are have no pets yet </Text>
    </Flex>
  );
};

export default PetsList;
