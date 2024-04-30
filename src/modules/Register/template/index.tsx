'use client'

import IButtonComponent from '@/modules/GlobalComponents/ButtonW';
import FormW from '@/modules/GlobalComponents/Form';
import InputW from '@/modules/GlobalComponents/InputW';
import LogoHome from '@/modules/GlobalComponents/LogoHome'
import Link from 'next/link';
import React, {useEffect, useState } from 'react'
import { Input } from 'reactstrap';
import { RiArrowGoBackFill } from "react-icons/ri";
import { fetchCities, fetchDataDepartaments } from '@/helpers/api_colombia';
import { useAppSelector, useAppDispatch } from '@/Store/hooks'
import { RegisterUser } from '@/Store/Slices/Authentication/RegisterSlice'
import { useRouter } from "next/navigation"


const RegisterTemplate = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { Loading, error, exito } = useAppSelector((state) => ({
        error: state.Register.error,
        Loading: state.Register.Loading,
        exito: state.Register.exito,
    
      }))



    const [form,setForm] = useState<any>({name:"",LastName:"",email:"",date:"",profile:"",department:"",city:"",University:"", password:"",confirmPassword:"",address:"",phoneNumber:"",career:"",semester:""});

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
    {type: "date", title:"Fecha de nacimiento", nameKey:"date", },
    {type: "text", title:"Dirección", nameKey:"address" },
    //{type: "number", title:"Numero", nameKey:"phoneNumber" },
]

let segundoPaso = [
    {type: "select", title:"Tipo de perfil", nameKey:"profile",options:[ { value: "STUDENT", label: "Estudiante" }, { value: "Psicologo", label: "Psicologo"}] },
    {type: "select", title:"Departamento", nameKey:"department",options:options},
    {type: "select", title:"Ciudad", nameKey:"city",options:optionsCity },
    {type: "text", title:"Universidad", nameKey:"University",typeCampo:"input" },
]

let EstudiateProps = [
    {type: "text", title:"Carrera", nameKey:"career", },
    {type: "number", title:"Semestre", nameKey:"semester", },
    {type: "number", title:"Numero", nameKey:"phoneNumber", },
]


let ultimoPaso = [
    {type: "email", title:"Correo", nameKey:"email", },
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
            setsiguiente("Tercer")
        }
        if(siguiente =="Tercer"){
            setsiguiente("Ultimo")
        }
    }

    const handlepassReturn = ()=>{
        if(siguiente =="Segundo"){
            setsiguiente("Primer")
        }
        if(siguiente =="Tercer"){
            setsiguiente("Segundo")
        }
        if(siguiente =="Ultimo"){
            setsiguiente("Tercer")
        }
    }

    useEffect(()=>{
        if(siguiente == "Primer" && (form.name != "" && form.LastName != "" &&  form.date != "" && form.address != "")){
            setDisabled(false)
        }

        else if(siguiente == "Segundo" && (form.profile != "" && form.department != "" && form.city != "" && form.University != "")){
            setDisabled(false)
        }

        else if(siguiente == "Tercer" && form.profile == "STUDENT" && (form.semester != "" && form.career != "" && form.phoneNumber != "") && form.semester > 0 && form.semester < 11){
            setDisabled(false)
        }
        else if(siguiente == "Tercer" && form.profile == "Psicologo"){
            //
        }

        else if(siguiente == "Ultimo" && (form.email != "" && form.password != "" && form.confirmPassword != "") && form.password == form.confirmPassword){
            setDisabled(false)
        }

        else{
            setDisabled(true)
        }

    },[form,siguiente])


    const CreateUser = ()=>{
        console.log("CreateUser")
        dispatch(RegisterUser(form))
    }

    const subtitleRegister = ()=>{

        switch(siguiente){
            case "Primer":
                return "Datos Personales"

            case "Segundo":
                return "Localidad"

            case "Tercer":
                return "Datos de perfil"
            
            case "Ultimo":
                return "Credenciales de inicio"
        }
    }

    useEffect(()=>{
        if(exito){
            router.push('/Login')
        }
      },[exito])



  return (
    <div className=' w-screen h-screen fixed inset-0 z-0 bg-cover bg-righ overflow-auto  bg-no-repeat bg-center flex md:justify-start items-start box-border justify-center' style={{backgroundImage: `url('/Images/Register/Imagen_3.jpg')`}}>
        <div className=' w-full sm:w-[550px] h-auto min-h-screen bg-white dark:bg-darkBG dark:text-white shadow-2xl box-border pt-7 px-6 flex flex-col justify-center items-center'>
            <LogoHome/>
            <span className=' uppercase p-5 text-4xl font-title'><strong>Crea tu cuenta</strong></span>
            <div className='flex justify-center items-center w-[90%]'>
            {siguiente == "Segundo" || siguiente == "Tercer" || siguiente =="Ultimo"  ? 
            (<div onClick={handlepassReturn} className=' p-2 mr-auto rounded-xl bg-primaryWellTalkUni'><RiArrowGoBackFill/></div>):
            null}
            {/* subtitulo */}
            <span className=' uppercase text-2xl font-title'>{subtitleRegister()}</span>

            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='box-border p-2 grid grid-cols-1 gap-3 w-full'>

                    {siguiente == "Primer" ?
                     <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={primerPaso}/>:null}

                     {siguiente == "Segundo" ? (
                        <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={segundoPaso}/>
                     ):null}
                     {siguiente == "Tercer" && form.profile == "Psicologo" ? (
                        <p>Psicologo</p>
                     ):null}

                     {siguiente == "Tercer" && form.profile == "STUDENT" ? (
                        <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={EstudiateProps}/>
                     ):null}

                     {siguiente == "Ultimo" ? (
                        <FormW form={form} classname='py-2 px-2 w-[100%] border border-black rounded-xl' onChange={handleForm} list={ultimoPaso}/>
                     ):null}
                    



                </div>
                
                {siguiente == "Primer" ? (<div className='flex justify-end w-full underline'>
                    <Link href="/Login">Ya tienes una cuenta?</Link>
                </div>):null}

                <div className=' mt-5'>
                    {siguiente == "Primer" || siguiente == "Segundo" || siguiente == "Tercer" ? (<IButtonComponent disabled={disabled} actionOnClick={handlepass} label="Siguiente"/>):null}

                    {siguiente == "Ultimo" ? (<IButtonComponent disabled={disabled} actionOnClick={CreateUser} label="Crear"/>):null}
                </div>
            </div>
        </div>
    </div>
  )
} 

export default RegisterTemplate
