//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { Counter } from './components/Counter'
import { CounterWithEffect } from './components/CounterWithEffect'
import { Form } from './components/Form'
import { ToggleButton } from './components/Toggle'

function App() {

  return (
    <>
    <Form />
    <ToggleButton></ToggleButton>
    <CounterWithEffect />
    
    </>
  )
}

export default App
