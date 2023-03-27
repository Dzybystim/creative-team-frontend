import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import moment from 'moment/moment';
import { Text, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addNewPet } from 'redux/auth/operations';
import { FormikControl } from '../../../FormikControl';
import { Button } from 'components/UserPage/Button';
import { toast } from 'react-toastify';
import { addPetInitialState, addPetSchema } from './index';
import { postImageToStorage } from '../../../../utilities/helpers';

const ModalAddsPet = ({ onClose }) => {
  const [firstStep, setFirstStep] = useState(true);
  const [imageURL, setImageURL] = useState('');
  const dispatch = useDispatch();

  function isDisabled(dirty, errors) {
    const { name, date, breed } = errors;
    return (
      !dirty || name !== undefined || date !== undefined || breed !== undefined
    );
  }

  const handleUpload = async e => {
    if (!e.target.files[0]) {
      toast.error('Please select a file');
      return;
    }
    if (e.target.files[0].size > 375000) {
      toast.error('You can not upload the file greater then 3 MB');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    postImageToStorage(formData)
      .then(data => {
        setImageURL(data.urlAvatar);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const handleSubmit = values => {
    const imgUrl =
      imageURL ||
      'https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg';
    const birthdate = moment(values.date, 'YYYYY-MM-DD').format('DD.MM.YYYY');
    const addPet = { ...values, photoURL: imgUrl, date: birthdate };
    dispatch(addNewPet(addPet));
    onClose();
    return;
  };

  return (
    <Formik
      initialValues={addPetInitialState}
      validationSchema={addPetSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
    >
      {({ errors, dirty }) => (
        <Form
          autoComplete="off"
          style={{
            display: 'flex',
            flexFlow: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {firstStep ? (
            <>
              <FormikControl
                type="text"
                name="name"
                label={
                  <>
                    Name pet
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder={'Type name pet'}
                autoFocus
                width={'60'}
              />
              <FormikControl
                type="date"
                name="date"
                label={
                  <>
                    Date of birthday
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                width={'60'}
              />
              <FormikControl
                type="text"
                name="breed"
                label={
                  <>
                    Breed
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder="Type breed"
                width={'60'}
                mb={'40px'}
              />
              <Box
                maxW={'none'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
                gap="5px"
              >
                <Button
                  control="secondary"
                  onClick={() => setFirstStep(false)}
                  mb={{ base: '3', md: '0' }}
                  width={{ md: '180px' }}
                  isDisabled={isDisabled(dirty, errors)}
                  aria-label="next"
                >
                  Next
                </Button>
                <Button
                  onClick={onClose}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                  aria-label="cancel"
                >
                  Cancel
                </Button>
              </Box>
            </>
          ) : (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              maxW={'none'}
            >
              <Text
                display={'inline-flex'}
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight={'medium'}
                lineHeight={{ base: 'short', md: '1.2' }}
                letterSpacing={'-0.01em'}
                mb={'5'}
              >
                Add photo and some comments
                {
                  <Text as={'span'} color={'accent.accentOrange'}>
                    *
                  </Text>
                }
              </Text>
              {/* <FormikControl
                control="file"
                id={photoId}
                name="UPLOAD"
                label="UPLOAD"
                width="250px"
                height="50px"
                clip="unset"
                size={{ base: '108px', md: '100px' }}
                borderRadius={{ base: '20px', md: '40px' }}
                plusSize={{ base: '10%', md: '20%' }}
                errPos={'center'}
              /> */}
              <label htmlFor="imageURL">Load the pet’s image</label>
              <label htmlFor="imageURL">
                <Field
                  id="imageURL"
                  type="file"
                  name="imageURL"
                  accept="image/*,.png,.jpg,.gif,.web,"
                  onChange={handleUpload}
                />
                {imageURL && (
                  <img src={imageURL} alt="Pet" height={116} width={116} />
                )}
              </label>
              <FormikControl
                control="textarea"
                name="comments"
                label={
                  <>
                    Comments
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder="Type comments"
              />
              <Box
                maxW={'none'}
                width={'full'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
              >
                <Button
                  type="submit"
                  mb={{ base: '3', md: '0' }}
                  control="secondary"
                  width={{ md: '180px' }}
                  aria-label="add"
                >
                  Done
                </Button>
                <Button
                  onClick={() => setFirstStep(true)}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                  aria-label="back"
                >
                  Back
                </Button>
              </Box>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddsPet;
