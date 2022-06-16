import React from 'react'
import {GiFluffyWing} from "react-icons/gi"
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar () {
    let Links = [
        {seccion: "Planta", link:"/category/plant"},
        {seccion: "Fuego", link:"/category/fire"},
        {seccion: "Agua", link:"/category/water"},
        {seccion: "Bicho", link:"/category/bug"}
    ]

    return (<>
        <nav className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <Link to="/" >
                    <div className='font-bold text-2x1 cursor-pointer flex items-center text-gray-800'>
                        <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                            <GiFluffyWing/>
                        </span>
                        Anidachi
                    </div>
                </Link>
                <ul className='md:flex md:items-center'>
                    {
                        Links.map((item) => (
                            <li key={item.seccion} className='md:ml-8 text-base'>
                                <Link to={item.link} className='text-gray-800 hover:text-gray-400 duration-500'>{item.seccion}</Link>
                            </li>
                        ))
                    }
                    <div className='md:ml-8'><CartWidget compra={2} /></div>
                </ul>
            </div>
        </nav>
    </>)
}

export default NavBar