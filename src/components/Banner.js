import React from 'react'



export default function Banner() {
  return (
    <div className='w-full h-96 flex bg-orange-400'>
      
      <div className='w-3/5 h-full flex flex-col items-center justify-center gap-6'>
        <h1 className='text-center font-medium text-6xl w-3/4'>¡Bienvenido a <span className='font-bold text-6xl'>Anidachi</span>!</h1>
        <p className='text center font-normal text-base'>Productos anime y videojuegos</p>
      </div>

      <div className='w-2/5 h-full object-contain overflow-hidden bg-slate-50' style={{borderRadius: '50%'}}>
        <img src='Hime-T.png' className=''/>
      </div>
    </div>
  )
}
