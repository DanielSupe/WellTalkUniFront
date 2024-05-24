'use client'

import React, { useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '@/Store/hooks'
import { getCitas } from '@/Store/Slices/Citas/CitasSlice';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const CalendarTemplate = () => {
    const dispatch = useAppDispatch();

    const handleDateClick = (date: any) => {
      console.log(date,"dataaa")
    };

    const { Loading, error, exito,citas } = useAppSelector((state) => ({
      error: state.Citas.error,
      Loading: state.Citas.Loading,
      exito: state.Citas.exito,
      citas: state.Citas.citas,
  
    }))

    useEffect(()=>{
       dispatch(getCitas())
    },[])
  return (
    <div className='w-full min-h-full box-border p-2 pt-6 font-title dark:bg-bgCalendar dark:text-white'>
      <FullCalendar
      plugins={[ dayGridPlugin,interactionPlugin ]}
      initialView="dayGridMonth"
      events={citas}
      dateClick={handleDateClick}
    />
    </div>
  )
}

export default CalendarTemplate