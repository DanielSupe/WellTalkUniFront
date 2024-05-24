"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import FormW from "@/modules/GlobalComponents/Form";
import IButtonComponent from "@/modules/GlobalComponents/ButtonW";
import { IoIosLogIn } from "react-icons/io";
import { useAppDispatch, useAppSelector} from '@/Store/hooks'
import { CreateCitas, getListPsicologos, getReinicioExito } from "@/Store/Slices/Citas/CitasSlice";
import { useRouter } from "next/navigation"
import { procesarPsicologos } from "@/helpers/tool_helpers";

const AgendarTemplate = () => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [form, setForm] = useState({
    Date:"",Hora:"",Psicologo:""
  });

  const { Loading, error, exito,psicologos } = useAppSelector((state) => ({
    error: state.Citas.error,
    Loading: state.Citas.Loading,
    exito: state.Citas.exito,
    psicologos:state.Citas.psicologos

  }))


  useEffect(()=>{
    if(exito){
      router.push('/Main/Calendario')
      dispatch(getReinicioExito())
    }
  },[exito])


  useEffect(()=>{
    dispatch(getListPsicologos())
  },[])
  

  const handleForm = (nameKey:string, change:any)=>{
    setForm(
        {
            ...form,
        [nameKey]: change
        }
    )
}

const handleDateClick = (date: any) => {
  setForm({
    ...form,
    Date: date.dateStr
  })
};

  const createCita = ()=>{
    dispatch(CreateCitas(form))
  }

  let AgendarCita = [
    { type: "date", title: "Fecha", nameKey: "Date", typeCampo: "date" },
    { type: "time", title: "Hora", nameKey: "Hora", typeCampo: "time" },
    { type: "select", title: "Psicologo", nameKey: "Psicologo", options: procesarPsicologos(psicologos)},
  ];

  return (
    <div className="w-full md:min-h-[90vh] flex flex-col md:flex-row justify-start md:justify-center items-center box-border p-2">
      <div className="md:w-[40%] flex justify-center items-center overflow-auto">
        <div className="w-full  box-border p-2 font-title ">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
          />
        </div>
      </div>
      <div className=" flex-grow h-full  flex justify-center items-start">
        <div className=" w-[90%] h-full box-border p-2 inline-flex flex-col justify-center items-center ">

            <span className=" text-start w-full box-border p-4 font-title font-medium text-2xl">Agenda tu cita!</span>

            <FormW
              form={form}
              classname="py-2 px-2 w-full border border-black rounded-xl"
              onChange={handleForm}
              list={AgendarCita}
            />

          <IButtonComponent btnIcon={<IoIosLogIn/>}  className='w-full' classNameContend='flex justify-center p-2 rounded-xl bg-primaryWellTalkUni items-center w-full mt-auto transition' classNameContainer='flex mt-4 w-full justify-center items-center' disabled={false} actionOnClick={createCita} label="Agendar cita"/>

        </div>
      </div>
    </div>
  );
};

export default AgendarTemplate;
