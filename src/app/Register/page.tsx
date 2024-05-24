import RegisterTemplate from '@/modules/Register/template'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Registrate!",
  description: "Ingresa para ser parte de esta comunidad",
};

function page() {
  return (
    <div>
      <RegisterTemplate/>
    </div>
  )
}

export default page