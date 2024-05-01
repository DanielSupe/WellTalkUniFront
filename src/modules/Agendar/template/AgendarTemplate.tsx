"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import FormW from "@/modules/GlobalComponents/Form";

const AgendarTemplate = () => {
  const handleDateClick = (date: any) => {
    console.log(date, "DATEE")
    setForm({
      ...form,
      Date: date.dateStr
    })
  };


  const [form, setForm] = useState({
    Date:"",Hora:"",Psicologos:""
  });

  const handleForm = (nameKey:string, change:any)=>{
    setForm(
        {
            ...form,
        [nameKey]: change
        }
    )
}

  let AgendarCita = [
    { type: "date", title: "Fecha", nameKey: "Date", typeCampo: "date" },
    { type: "time", title: "Hora", nameKey: "Hora", typeCampo: "time" },
    { type: "select", title: "Psicologos", nameKey: "Psicologos", options: [] },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center box-border p-2">
      <div className="md:w-[40%] flex justify-center items-center overflow-auto">
        <div className="w-full min-h-[400px] box-border p-2 font-title ">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
          />
        </div>
      </div>
      <div className=" flex-grow h-full box-border p-2">
        <div className="box-border p-2 flex flex-col justify-center items-center w-full">

            <FormW
              form={form}
              classname="py-2 px-2 w-[80%] border border-black rounded-xl"
              onChange={handleForm}
              list={AgendarCita}
            />
          
        </div>
      </div>
    </div>
  );
};

export default AgendarTemplate;
