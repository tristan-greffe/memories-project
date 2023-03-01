import React from 'react'

import { AppBar, Typography } from '@material-ui/core'

import useStyles from './styles'

import Memories from '../../assets/img/memories.png'

function Navbar() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
      <img className={classes.image} src={Memories} alt='memories' height='60'/>
    </AppBar>
  )
}

export default Navbar