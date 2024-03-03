import React from 'react'
import Hero from '../components/Hero'
import FraseDia from '@/modules/GlobalComponents/FraseDia'

const HomeTemplate = () => {

    // const {contador} = useAppSelector((state)=>({
    //     contador:state.RegisterSlice.prueba
    //   }))

  return (
    <div className='w-full h-full'>
        <div className='w-full h-[7vh]'>
            <FraseDia/>
        </div>
        <div className='w-full h-[92vh]'>
            <Hero imagenUrl="Images/Home/Imagen_3.jpg" title=""/>
        </div>

    </div>
  )
}

export default HomeTemplate