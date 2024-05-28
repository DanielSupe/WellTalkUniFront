'use client'

import React, { useEffect, useState } from 'react'
import { useAppDispatch,useAppSelector } from '@/Store/hooks'
import { getCitas } from '@/Store/Slices/Citas/CitasSlice';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Popup from '../components/Popup';
import Table from '../components/Table';
import { FaUserTie } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
const CalendarTemplate = () => {
    const dispatch = useAppDispatch();
    const [popUpTutorial,setPopUpTutorial] = useState(false);
    const [cita, setCita] = useState<any>([]);

    

    const handlePopUp = ()=>{
      setPopUpTutorial(false)
    }

    const { Loading, error, exito,citas } = useAppSelector((state) => ({
      error: state.Citas.error,
      Loading: state.Citas.Loading,
      exito: state.Citas.exito,
      citas: state.Citas.citas,
  
    }))

    const handleDateClick = (date: any) => {
      const titleDate = date.dayEl.innerText;
      console.log(titleDate," innertext")
      const cita = citas.filter((item:any)=>{
       return  titleDate.includes( `${item.perfil.name} ${item.perfil.lastName} ${item.perfil.phoneNumber}`) && item.date == date.dateStr
      })
      if(cita.length >0){
        setPopUpTutorial(true);
        console.log(cita,"cita en 0 ")//Cambiar para que funcione con varias
        setCita(cita)
      }
      console.log(cita, "cita especifica")
      console.log(date,"dataaa")
    };

    useEffect(()=>{
       dispatch(getCitas())
    },[])

  return (
    <div className='w-full min-h-screen box-border p-2 pt-6 font-title dark:bg-bgCalendar dark:text-white'>
      <FullCalendar
      plugins={[ dayGridPlugin,interactionPlugin ]}
      initialView="dayGridMonth"
      events={citas}
      dateClick={handleDateClick}
    />

<Popup  isOpen={popUpTutorial} onClose={handlePopUp} name={"New Account"}>
                <div className='flex flex-col w-full h-auto justify-start items-center box-border p-2 '>
                  {cita.map((item:any,index:number)=>{
                    return(
                      <div className='w-full min-h-[120px] box-border mt-2 flex flex-col justify-center items-center' key={`mapCitas${index}`}>
                        <div className='flex justify-center items-center box-border p-2'>
                          {item.perfilType == "psychologist" ? <FaUserTie size={70}/>:<PiStudentFill size={70}/> }
                          <p>{item.date}</p>
                        </div>
                        <div className='w-full overflow-auto'>
                          <Table objet={item.perfil}/>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </Popup>
    </div>
  )
}

export default CalendarTemplate