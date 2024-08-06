import { useEffect, useState } from 'react'

function Pokemon({pokeData}){

    return (
        <>
          <header>Pokemon Popsicle JS</header>
          <h1>Select a pokemon</h1>
    
          <select>
            <option>select a pokemon</option>
            {pokeData && pokeData.map((pokemon) => (
              <option key={pokemon.name}>{pokemon.name}</option>
            ))}
          </select>
    
          <footer>Art by:</footer>
        </>
      );
    }
    // return(
    //     <>
    //         <header>Pokemon Popsicle JS</header>
    //             <h1>Select a pokemon</h1>
                
    //             <select>
    //                 <option>select a pokemon</option>
    //                 {pokeData && pokeData.map((pokemon)=>(

    //                     <option key={pokemon.name}>{pokemon.name}</option>
    //                 )
    //                 )}
    //             </select>

    //         <footer>Art by: </footer>

    //     </>
    // ) 
// }

export default Pokemon