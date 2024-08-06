import { useEffect, useState } from 'react'
// import PokemonTS from './PokemonTS'
import Pokemon from './Pokemon'
import './App.css'

// interface PokeData{
//   // id: number;
//   // name: string;
//   // sprites: {
//   //   front_default: string

//   // }
//   name: string;
//   url: string;
// }

function App() {

  const [pokeData, setPokeData] = useState<any>([])
  // const [pokeData, setPokeData] = useState<PokeData[] | null>(null)
  // const [pokeDataTS, setPokeDataTS] = useState<any>()

  useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1025")
    
      .then (r => r.json())
      .then(data => setPokeData(data.results))
      .catch(error => console.error('Error fetching data:', error))
  },[])

  
  console.log(pokeData)
    return (
      <>
        {/* <Pokemon pokeData={pokeData}></Pokemon> */}
        {/* <PokemonTS pokeData={pokeDataTS}></PokemonTS> */}
        {pokeData ? (
        <Pokemon pokeData={pokeData} />
      ) : (
        <p>Loading...</p>
      )}
      {/* {pokeDataTS ? (
        <PokemonTS pokeData={pokeDataTS} />
      ) : (
        <p>Loading...</p>
      )} */}
      </>
    )
  }

export default App


