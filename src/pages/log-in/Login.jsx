import React from 'react'
import { Box, Typography } from '@mui/material';
import * as yup from 'yup'
import { useFormik } from 'formik';

import InputField from '../../MuiComponent/InputField/InputField';
import Button from '../../MuiComponent/Button/Button';
import { outerBox, innerBox } from './login-design';
import { getUser } from '../../routes/api-routes/api-routes';
import { get } from '../../api';
import { toastHandler } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const navigate = useNavigate();

   const loginSchema = yup.object().shape({
      email: yup.string().required('email is required').email('invalid email format'),
      password: yup.string()
         .required('password is required')
         .min(8, 'Pasword must be 8 or more characters')
         .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, 'Password ahould contain at least one uppercase and lowercase character')
         .matches(/\d/, 'Password should contain at least one number')
         .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, 'Password should contain at least one special character'),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
         const { data, statusCode } = await get(getUser, { email: values.email });
         if (!!data.length === false && statusCode === 200) {
            toastHandler('User not found!', 'error');
            return;
         };
         toastHandler('Login Successfully', 'success');
         navigate('/home');
         resetForm();
      }
   })

   return (
      <Box sx={outerBox}>
         <Box sx={{ ...innerBox }}>
            <Typography variant='h3' sx={{ fontWeight: 600, textAlign: 'left', mb: 2 }}>Login</Typography>
            <InputField
               label={'Email'}
               type={'text'}
               fullwidth
               name='email'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
               helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}

            />
            <InputField
               label={'Password'}
               type={'text'}
               name='password'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
               helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
               fullwidth
            />

            <Button onClick={formik.handleSubmit} variant={'contained'} label={'Login'} />
         </Box>
      </Box>
   )
}
export default Login;