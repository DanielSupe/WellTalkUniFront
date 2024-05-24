import AgendarTemplate from '@/modules/Agendar/template/AgendarTemplate'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Agendar",
  description: "Agenda tu cita con uno de nuestros especialistas",
};

const page = () => {
  return (
    <AgendarTemplate/>
  )
}

export default page