'use client'

import React from 'react'
import Hero from '../components/Hero'
import BannerHome from '../components/Banner'
import { CandadoSVG, ComunidadSVG, ManoSVG, PhoneSVG } from '../../../../public/svgs/svgs'



const HomeTemplate = () => {




    const items = [{title: "Confidencialidad", icon: CandadoSVG() },{title: "Apoyo Profesional", icon: ManoSVG() },{title: "Accesibilidad", icon: PhoneSVG() },{title: "Comunidad", icon: ComunidadSVG()}]

  return (
    <div className='w-full'>
        <div className='w-full h-[72vh]'>
            <Hero imagenUrl="/Images/Home/Imagen_3.jpg" title="WellTalkUni" subtitulo='Donde tu bienestar importa'/>
        </div>
        <BannerHome items={items}/>

    </div>
  )
}

export default HomeTemplate