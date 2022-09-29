import * as yup from 'yup';

export default yup
  .object()
  .shape({
    name: yup.string().required('The name field is required'),
    email: yup
      .string()
      .email('this field must be an email')
      .required('The email field is required')
      .trim(),
    password: yup
      .string()
      .min(8, 'must be more than 8 characters')
      .required('The password field is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'The field must match')
      .required('The confirm password field is required'),
  })
  .required();
