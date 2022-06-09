import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {

  /* const onAdd = (stock, cant) => {
    stock === 0 ?  alert("No hay stock del producto") : alert(`Añadido a carrito: ${cant}`);
  } */
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const contenido = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {id: 1, name: "Bulbasaur", description: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
          {id: 2, name: "Ivysaur", description: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"},
          {id: 3, name: "Venusaur", description: "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"},
          {id: 4, name: "Charmander", description: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"},
          {id: 5, name: "Charmeleon", description: "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"},
          {id: 6, name: "Charizard", description: "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"},
          {id: 7, name: "Squirtle", description: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"},
          {id: 8, name: "Wartortle", description: "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"},
          {id: 9, name: "Blastoise", description: "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"},
          {id: 10, name: "Caterpie", description: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"},
          {id: 11, name: "Metapod", description: "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"},
          {id: 12, name: "Butterfree", description: "Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"}
        ])
      }, 2000)
    });

contenido
.then((result) => {
  setPokemon(result)
  setLoading(false)
})
.catch((error) => {
  console.error("Error: ", error)
  setError(true)
})
}, [])

  

  return (
    <>
      <div>{loading && "Loading"}</div>
      <div>{error && "Hubo un error"}</div>
      <div className='flex flex-col items-center'>
        <ItemList pokemon={pokemon} />
      </div>
      {/* <div className='flex flex-col items-center justify-around'>
          <h1 className='flex justify-center items-center text-yellow-600'>{greeting}</h1>
          <ItemCount initial={1} stock={8} onAdd={onAdd} />
        </div> */}
        
      
    </>
  )
}

export default ItemListContainer