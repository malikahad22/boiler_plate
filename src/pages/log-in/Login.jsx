import { Box } from '@mui/material';
import React from 'react'
import InputField from '../../MuiComponent/InputField/InputField';

const Login = () => {
   return (
      <Box>
         <Box>
            <InputField
               label={'Email'}
               type={'text'}
            />
            <InputField
               label={'Password'}
               type={'password'}
            />
         </Box>
      </Box>
   )
}
export default Login;