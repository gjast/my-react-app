import { useState } from 'react'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import './App.css'
import InfoTeam from './components/dopComponents/Info_team/InfoTeam'
import Reg from './components/Registartion/Reg'

function App() {

  return (
    <>
     <Header/>
     <Info/>
     <InfoTeam/>
     <Reg/>
    </>
  )
}

export default App
