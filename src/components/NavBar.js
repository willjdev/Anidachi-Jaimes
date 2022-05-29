import React from 'react'
import {GiFluffyWing} from "react-icons/gi"

function NavBar () {
    let Links = [
        {seccion: "Destacado", link:"/"},
        {seccion: "Nosotros", link:"/"},
        {seccion: "Catalogo", link:"/"},
        {seccion: "Contacto", link:"/"}
    ]

    return (<>
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2x1 cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                        <GiFluffyWing/>
                    </span>
                    Anidachi
                </div>
                <ul className='md:flex md:items-center'>
                    {
                        Links.map((item) => (
                            <li key={item.seccion} className='md:ml-8 text-base'>
                                <a href={item.link} className='text-gray-800 hover:text-gray-400 duration-500'>{item.seccion}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    </>)
}

export default NavBar