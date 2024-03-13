import { url } from 'inspector'
import React from 'react'

interface types{
    imagenUrl:string
    title:string
    description?:string
    subtitulo?:string
}

const Hero = ({imagenUrl,title,description,subtitulo}:types) => {
  return (
    <div className='w-full h-full bg-cover bg-no-repeat bg-right md:bg-center relative flex justify-center items-center'style={{ backgroundImage: `url('${imagenUrl}')` }}>
      <div className=' ml-8 flex flex-col items-center justify-center'>
      <span className=' text-3xl md:text-7xl text-black'>
          <strong className=' text-white font-title'>{title}</strong>
          </span>

          <span className=' text-2xl md:text-6xl font-title bg-white bg-opacity-50 rounded-lg flex items-center pt-4'>{subtitulo}</span>
      </div>
    </div>
  )
}

export default Hero