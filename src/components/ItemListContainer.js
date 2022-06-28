import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'


let productos = [
    {
        "id": 1,
        "category": "plant",
        "name": "Bulbasaur",
        "description": "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo",
        "weight": "2kg",
        "height": "50cm",
        "width": "70cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "price": 25
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "category": "plant",
        "description": "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras",
        "weight": "4kg",
        "height": "60cm",
        "width": "98cm",
        "no": "23yjrrtJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        "price": 50
    },
    {
        "id": 3,
        "name": "Venusaur",
        "category": "plant",
        "description": "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol",
        "weight": "104kg",
        "height": "220cm",
        "width": "280cm",
        "no": "2OIWNGO94",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        "price": 200
    },
    {
        "id": 4,
        "name": "Charmander",
        "category": "fire",
        "description": "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
        "weight": "8.5kg",
        "height": "60cm",
        "width": "80cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "price": 64
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "category": "fire",
        "description": "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
        "weight": "19kg",
        "height": "110cm",
        "width": "90cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        "price": 120
    },
    {
        "id": 6,
        "name": "Charizard",
        "category": "fire",
        "description": "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
        "weight": "90.5kg",
        "height": "170cm",
        "width": "150cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "price": 450
    },
    {
        "id": 7,
        "name": "Squirtle",
        "category": "water",
        "description": "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        "weight": "9kg",
        "height": "50cm",
        "width": "67cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "price": 72
    },
    {
        "id": 8,
        "name": "Wartortle",
        "category": "water",
        "description": "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
        "weight": "22.5kg",
        "height": "100cm",
        "width": "109m",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        "price": 156
    },
    {
        "id": 9,
        "name": "Blastoise",
        "category": "water",
        "description": "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "weight": "85.5kg",
        "height": "160cm",
        "width": "178cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "price": 510
    },
    {
        "id": 10,
        "name": "Caterpie",
        "category": "bug",
        "description": "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.",
        "weight": "2.9kg",
        "height": "30cm",
        "width": "50cm",
        "no": "2334FJK57",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        "price": 19
    }
];


function ItemListContainer() {

  
  const {id} = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setPokemon([]);
    setLoading(true);
    setError(error);
    const contenido = new Promise((res, rej) => {
      //setTimeout(() => {
        if (id == undefined) {
          res(productos)
        } else {
          res(productos.filter((item) => item.category == id))
        }
      //}, 2000)
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
}, [id])

  

  return (
    <>
      <div>{loading && "Loading"}</div>
      <div>{error && "Hubo un error"}</div>
      <div className='flex flex-col items-center'>
        <ItemList pokemon={pokemon} />
      </div>
      
    </>
  )
}

export default ItemListContainer