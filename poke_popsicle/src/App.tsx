import { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import './App.css'
// import '/PokemonBeach.jpg'

function App() {
  const [pokeData, setPokeData] = useState()

  useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1025")
      .then (r=> r.json())
      .then(data => setPokeData(data))

  })



    return (
      <>
        {/* <img src='PokemonBeach.jpg'></img> */}
        <Pokemon></Pokemon>
      </>
    )
  }

export default App
