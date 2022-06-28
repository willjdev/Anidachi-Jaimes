import React from 'react'

function Cart() {
  return (
    <>
      <section className='w-full h-screen flex flex-col items-center'>
        <div className='w-10/12 h-auto flex flex-col'>
          <div className='w-full h-20 border-b-2 border-slate-200 flex items-center text-lg font-bold '>
          <h1>Tu carrito</h1>
          </div>
          <div className='w-8/12 h-auto flex flex-col mt-4'>
            {/* Encabezados */}
            <div className='w-full h-20 flex border-b-2 border-slate-200'>
              <div className='w-3/6 h-full flex items-end justify-center text-base font-semibold pb-4'>
                <p>Producto</p>
              </div>
              <div className='w-2/6 h-full flex items-end justify-around text-base font-semibold pb-4 border border-black'>
                <li className='w-1/3 h-full flex items-end justify-center border border-black'>Precio</li>
                <li className='w-1/3 h-full flex items-end justify-center border border-black'>Cantidad</li>
                <li className='w-1/3 h-full flex items-end justify-center border border-black'>Total</li>
              </div>
            </div>
            {/* Producto y detalles */}
            <div className='w-11/12 h-48 border-b-2 border-slate-200 flex justify-between items-center'>

              <div className='w-6/12 h-full flex justify-between items-center border border-black'>
                <div className='w-32 h-28 border border-black'>
                  <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'/>
                </div>
                <div className='w-auto h-28 flex items-start text-base font-semibold border border-black pl-2'>
                  Bulbasaur - Pokemon tipo planta veneno
                </div>
              </div>

              <div className='w-4/12 h-full flex justify-center items-center border border-black'>
                <div className='w-1/3 h-28 text-center border border-black text-base'>
                  $232
                </div>
                <div className='w-1/3 h-28 text-center border border-black text-base'>
                  7
                </div>
                <div className='w-1/3 h-28 text-center border border-black'>
                  $989
                </div>
              </div>

              <div className='w-8 h-full border border-black'>

              </div>
            </div>
          </div> 
        </div>

      </section>
      {/* <section className='w-10/12 h-auto bg-white flex flex-col items-center'>
        <div className='w-full h-20 border-b-2 border-slate-200 flex items-center text-lg font-bold '>
          Tu carrito
        </div>
        <div className='w-8/12 h-auto flex flex-col self-start'>
          <div className='w-full h-24 flex border-b-2 border-slate-200'>
            <div className='w-1/2 h-full'>

            </div>
            <div></div>
          </div>
          

        </div>

      </section> */}
    </>
  )
}

export default Cart