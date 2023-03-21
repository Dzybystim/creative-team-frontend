import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Correct format: mail@ukr.net'
    )
    .test(
      'is-valid',
      message => `${message.path} is invalid`,
      (value, ctx) => {
        if (value) {
          if (value.substr(-2, 2) === 'ru') {
            return ctx.createError({
              message: 'rUSSIA IS A TERRORIST STATE',
            });
          }
        }
        return true;
      }
    ),
  password: Yup.string().required('Password is required').min(7),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const stepTwoValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Name is required')
    .label('Name')
    .matches(/^[a-zA-Z]+$/, 'In Latin letters'),
  cityRegion: Yup.string()
    .label('City')
    .required('City, region is required')
    .matches(/^[?!,.a-zA-Z0-9\s]+$/, 'In Latin letters'),
  mobilePhone: Yup.string()
    .required('Mobile phone is required')
    .label('Mobile phone')
    .matches(/^\+380\d{9}$/, 'Correct format: +380981234567'),
});

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Correct format: mail@ukr.net'
    )
    .test(
      'is-valid',
      message => `${message.path} is invalid`,
      (value, ctx) => {
        if (value) {
          if (value.substr(-2, 2) === 'ru') {
            return ctx.createError({
              message: 'rUSSIA IS A TERRORIST STATE',
            });
          }
        }
        return true;
      }
    ),
  password: Yup.string().required('Password is required'),
});

const emailValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Correct format: mail@ukr.net'
    )
    .test(
      'is-valid',
      message => `${message.path} is invalid`,
      (value, ctx) => {
        if (value) {
          if (value.substr(-2, 2) === 'ru') {
            return ctx.createError({
              message: 'rUSSIA IS A TERRORIST STATE',
            });
          }
        }
        return true;
      }
    ),
});

const passwordValidationSchema = Yup.object({
  password: Yup.string().required('Password is required').min(7),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export {
  stepOneValidationSchema,
  stepTwoValidationSchema,
  loginValidationSchema,
  emailValidationSchema,
  passwordValidationSchema,
};
