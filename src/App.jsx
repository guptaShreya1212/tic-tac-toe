import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { ToastContainer } from 'react-toastify';

import Grid from './components/grid/Grid'

function App() {

  return (
    <>
        <ToastContainer/>
    <Grid numberOfCards={9}/>
    </>
   
  )
}

export default App
