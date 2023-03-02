import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

function Input({ half, name, handleChange, label, autoFocus, handleShowPassword, type }) {
  return (
    <Grid item xs={half === 'true' ? 6 : 12}>
      <TextField 
        name={name}
        handlechange={handleChange}
        variant='outlined'
        required
        fullWidth 
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endadorment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        } : null }
      />
    </Grid>
  )
}

export default Input