import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from './Input'

import useStyles from './styles'

function Auth() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const classes = useStyles()

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp)

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignUp && (
              <>
                <Input name='firstName' label='Fist Name' handleChange={handleChange} autoFocus half='true' />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half='true' />
              </>
            )}
            <Input name='email' label='Email Adress' handleChange={handleChange} type='email' half='false' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} half='false' />
            { isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' half='false'/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify-content='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign In' : "D'ont have an account ? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth