import { Button as MuiButton } from '@mui/material';
import React from 'react'

const Button = ({ variant, onClick, label }) => {
   return (
      <MuiButton variant={variant} onClick={onClick}>{label}</MuiButton>
   )
}

export default Button;