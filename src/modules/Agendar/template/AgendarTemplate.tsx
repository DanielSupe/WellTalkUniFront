'use client'

import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick




const AgendarTemplate = () => {

    const [date, setDate] = useState("")

    const handleDateClick = (date:any)=>{
        setDate(date?.dateStr);
      }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className=''>

      </div>
        <div className='w-[400px] max-h-[400px] box-border p-2 pt-6 font-title overflow-auto'>
      <FullCalendar
      plugins={[ dayGridPlugin,interactionPlugin ]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
    />
    </div>
    <p>{date}</p>

    </div>
  )
}

export default AgendarTemplate