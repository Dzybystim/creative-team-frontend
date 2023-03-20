import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AuthError,
  AuthFormFirstPage,
  AuthFormSecondPage,
} from 'components/AuthForm';
import { useRegistrationUserMutation } from 'redux/auth/fetchUser';

const SignUp = () => {
  const [register, { isLoading, error }] = useRegistrationUserMutation();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    cityRegion: '',
    mobilePhone: '',
  });

  const [page, setPage] = useState(0);

  const makeRequest = async formData => {
    const { error } = await register(formData);
    if (!error) {
      navigate('/users');
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);
    const { email, password, name, cityRegion, mobilePhone } = newData;

    if (final & (page === 1)) {
      makeRequest({ email, password, name, cityRegion, mobilePhone });
      return;
    }
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <AuthFormFirstPage
      next={handleNextStep}
      data={data}
      title={'Registration'}
    />,
    <AuthFormSecondPage
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      title={'Personal Info'}
      isLoading={isLoading}
    />,
  ];

  return (
    <>
      {steps[page]}
      {error && (
        <AuthError
          error={error.data.message}
          additionalInfo={error.data.additionalInfo}
        />
      )}
    </>
  );
};

export default SignUp;
