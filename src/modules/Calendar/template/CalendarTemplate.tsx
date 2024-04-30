'use client'

import React, { useEffect } from 'react'
import { useAppDispatch } from '@/Store/hooks'
import { getCitas } from '@/Store/Slices/Citas/CitasSlice';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const CalendarTemplate = () => {
    const dispatch = useAppDispatch();

    useEffect(()=>{
       dispatch(getCitas())
    },[])
  return (
    <div className='w-full min-h-full box-border p-2 pt-6 font-title'>
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2024-04-28' },
        { title: 'event 2', date: '2024-05-02' },
        { title: 'event 2', date: '2024-04-10' }
      ]}
    />
    </div>
  )
}

export default CalendarTemplate