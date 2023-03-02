import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home.js'
import Auth from './components/auth/Auth'

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
