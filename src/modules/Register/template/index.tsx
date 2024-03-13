'use client'

import IButtonComponent from '@/modules/GlobalComponents/ButtonW';
import FormW from '@/modules/GlobalComponents/Form';
import InputW from '@/modules/GlobalComponents/InputW';
import LogoHome from '@/modules/GlobalComponents/LogoHome'
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { Input } from 'reactstrap';
import { RiArrowGoBackFill } from "react-icons/ri";
import { fetchCities, fetchDataDepartaments } from '@/helpers/api_colombia';



const RegisterTemplate = () => {

    const [form,setForm] = useState<any>({name:"",LastName:"",email:"",date:"",profile:"",department:"",city:"",University:"", password:"",confirmPassword:""});

    const [siguiente, setsiguiente] = useState("Primer");
    const [disabled, setDisabled] = useState(true)
    const [options,setOptions] = useState([])
    const [optionsCity,setOptionsCity] = useState([])


    useEffect(() => {
      const TraerDepartaments = async () => {
        const departaments = await fetchDataDepartaments()
        setOptions(departaments)
      };
      TraerDepartaments()
      }, []);

      useEffect(() => {
            setForm(
          {
            ...form,
          city: ""
          }
        )
        if (!form.department) return;

        const TraerCitys = async () => {
          const citys = await fetchCities(form.department)
          setOptionsCity(citys)
        };
        TraerCitys()
      }, [form.department]);


    useEffect(()=>{
        console.log(form, "CAMBIOO")
    },[form])

      
let primerPaso = [
    {type: "text", title:"Nombres", nameKey:"name", },
    {type: "text", title:"Apellidos", nameKey:"LastName", },
    {type: "email", title:"Correo", nameKey:"email", },
    {type: "date", title:"Fecha de nacimiento", nameKey:"date", },
]

let segundoPaso = [
    {type: "select", title:"Tipo de perfil", nameKey:"profile",options:[ { value: "Estudiante", label: "Estudiante" }, { value: "Psicologo", label: "Psicologo"}] },
    {type: "select", title:"Departamento", nameKey:"department",options:options},
    {type: "select", title:"Ciudad", nameKey:"city",options:optionsCity },
    {type: "text", title:"Universidad", nameKey:"University",typeCampo:"input" },
]

let ultimoPaso = [
    {type: "password", title:"Contraseña", nameKey:"password", },
    {type: "password", title:"Confirmar contraseña", nameKey:"confirmPassword", },
]

    const handleForm = (nameKey:string, change:any)=>{
        setForm(
            {
                ...form,
            [nameKey]: change
            }
        )
    }

    const handlepass = ()=>{
        setDisabled(true)
        if(siguiente =="Primer"){
            setsiguiente("Segundo")
        }
        if(siguiente =="Segundo"){
            setsiguiente("Ultimo")
        }
    }

    const handlepassReturn = ()=>{
        if(siguiente =="Segundo"){
            setsiguiente("Primer")
        }
        if(siguiente =="Ultimo"){
            setsiguiente("Segundo")
        }
    }

    useEffect(()=>{
        if(siguiente == "Primer" && (form.name != "" && form.LastName != "" && form.email != "" && form.date != "")){
            setDisabled(false)
        }

        else if(siguiente == "Segundo" && (form.profile != "" && form.department != "" && form.city != "" && form.University != "")){
            setDisabled(false)
        }

        else if(siguiente == "Ultimo" && (form.password != "" && form.confirmPassword != "") && form.password == form.confirmPassword){
            setDisabled(false)
        }

        else{
            setDisabled(true)
        }

    },[form,siguiente])


    const CreateUser = ()=>{
        alert("Holaaa")
    }



  return (
    <div className=' w-screen h-screen  bg-cover bg-no-repeat bg-center flex md:justify-start items-center box-border justify-center' style={{backgroundImage: `url('Images/Register/Imagen_3.jpg')`}}>
        <div className=' w-full sm:w-[550px] h-[100vh] bg-white dark:bg-darkBG dark:text-white shadow-2xl box-border pt-7 px-6 flex flex-col justify-center items-center'>
            <LogoHome/>
            <span className=' uppercase p-5 text-4xl font-title'><strong>Crea tu cuenta</strong></span>
            <div className='flex justify-center items-center w-[90%]'>
            {siguiente == "Segundo" || siguiente =="Ultimo" ? 
            (<div onClick={handlepassReturn} className=' p-2 mr-auto rounded-xl bg-primaryWellTalkUni'><RiArrowGoBackFill/></div>):
            null}
            <span className=' uppercase text-2xl font-title'>{siguiente == "Primer"? "Datos Personales":(siguiente == "Segundo" ? "Localidad":"Contraseña")}</span>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='box-border p-2 grid grid-cols-1 gap-3 w-full'>
                    {siguiente == "Primer" ?
                     <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={primerPaso}/>:
                     (siguiente == "Segundo" ? (
                        <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={segundoPaso}/>
                     ):
                     <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={ultimoPaso}/>)}
                </div>
                <div className='flex justify-end w-full underline'>
                    <Link href="/Login">Ya tienes una cuenta?</Link>
                </div>

                <div className=' mt-14'>
                    {siguiente == "Primer" || siguiente == "Segundo" ? (<IButtonComponent disabled={disabled} actionOnClick={handlepass} className="" label="Siguiente"/>):null}

                    {siguiente == "Ultimo" ? (<IButtonComponent disabled={disabled} actionOnClick={CreateUser} className="" label="Crear"/>):null}
                </div>
            </div>
        </div>
    </div>
  )
} 

export default RegisterTemplate
