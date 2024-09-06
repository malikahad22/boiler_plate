import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = ({ label, type }) => {
   return (
      <TextField
         label={label}
         type={type}
      />
   )
}

export default InputField