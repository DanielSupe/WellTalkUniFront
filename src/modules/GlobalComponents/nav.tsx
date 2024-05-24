'use client'

import { MdOutlineMenuOpen } from "react-icons/md";

import Link from 'next/link'
import DarkMode from './DarkMode'
import { PrimaryColorApp } from '@/helpers/constantes'
import { AppBar } from "@mui/material";
import PersistentDrawerRight from "./SideBarInMovilNav";
import LogoHome from "./LogoHome";
import { useEffect, useState } from "react";


let lista = [{label:"DarkMode", link:"/"}
            ,{label:"Home", link:"/"}
            ,{label:"Contactanos", link:"/contacto"},
            {label:"Registrate", link:"/Register"},
            {label:"Iniciar sesion", link:"/Login"},
          
          ]

const NavW = () => {

  const [mode, setMode] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("USER")){
      setMode(true)
    }
  },[])


  return (
    <div className='w-full h-[8vh] flex justify-center md:justify-end items-center dark:bg-darkBG dark:text-white overflow-hidden'>

      <div className="md:mr-auto ml-4">
        <LogoHome/> {/*Si ya se logueo tiene que poner el logo con link a main/home  */}
      </div>

      {!mode ? (
         <>
         <div className=' hidden md:block'>
           <div className='flex'>
             <div className='flex justify-around items-center'>
             <Link className='mx-4' href="/">Home</Link>
             <Link className='mx-4' href="Contacto">Contactanos</Link>
             <DarkMode/>
             </div>
 
           <div className='flex mx-4'>
             <div className=' p-2'><Link href="/Register">Registrarte</Link></div>
             <p className=' py-2'> | </p>
             <div style={{backgroundColor: `${PrimaryColorApp}`}} className=' p-2 rounded-md'><Link href="Login">Iniciar sesion</Link></div>
           </div>
           </div>
         </div>
 
         <div className='block md:hidden w-5'>
         <PersistentDrawerRight list={lista}/>
         </div>
         </>
      ):null}

     
    </div>
  )
}

export default NavW