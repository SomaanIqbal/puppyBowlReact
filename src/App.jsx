import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

function App() {
 
const [selectedPlayer, setSelectedPlayer] = useState(undefined)

  return (
    
    <>
      {selectedPlayer ? (<SinglePlayer player={selectedPlayer} poop={setSelectedPlayer} />) : <AllPlayers setSelectedPlayer={setSelectedPlayer} />} 
    </>
   
  )
}

export default App
