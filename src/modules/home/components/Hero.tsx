import { url } from 'inspector'
import React from 'react'

interface types{
    imagenUrl:string
    title:string
    description?:string
}

const Hero = ({imagenUrl,title,description}:types) => {
  return (
    <div className='w-full h-full bg-cover bg-no-repeat bg-right md:bg-center relative flex justify-center items-center'style={{ backgroundImage: `url('${imagenUrl}')` }}>
        <span className=' text-6xl'><strong>{title}</strong></span>
    </div>
  )
}

export default Hero