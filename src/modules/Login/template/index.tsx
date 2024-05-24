"use client";

import { LoginUser } from "@/Store/Slices/Authentication/Login/LoginSlice";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import IButtonComponent from "@/modules/GlobalComponents/ButtonW";
import FormW from "@/modules/GlobalComponents/Form";
import LogoHome from "@/modules/GlobalComponents/LogoHome";
import Link from "next/link";
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import ReCAPTCHA from 'react-google-recaptcha';

const LoginTemplate = () => {
  const siteKey = '6LdgY-cpAAAAAAekR8Msv21tC6jQAO8jbCLRCEZO';
  const router = useRouter();


  const { Loading, error, exito } = useAppSelector((state) => ({
    error: state.Login.error,
    Loading: state.Login.Loading,
    exito: state.Login.exito,

  }))

  const dispatch = useAppDispatch();



  const handleForm = (nameKey: string, change: any) => {
    setForm({
      ...form,
      [nameKey]: change,
    });
  };

  let Login = [
    { type: "email", title: "Email", nameKey: "email" },
    { type: "password", title: "Contraseña", nameKey: "password" },
  ];

  const [form, setForm] = useState({ email: "", password: "",ReCAPTCHAForm:false });
  const [disabled,setDisabled] = useState<boolean>(true)

  useEffect(()=>{
    const {email,password,ReCAPTCHAForm} = form
    if(email != "" && password!= "" && ReCAPTCHAForm){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[form])


  useEffect(()=>{
    const state = localStorage.getItem("remember");
    if(state){
      setForm(JSON.parse(state));
      setRemember(true);
    }
  },[])

  const[remember, setRemember] = useState(false)

  useEffect(()=>{
    console.log(remember,"recordarmeee")
  },[remember])


  const LoginCreate = ()=>{
      dispatch(LoginUser(form))

  }

  const handleCheckboxChange = () => {
    setRemember(!remember);
  };

  useEffect(()=>{
    if(exito){
      if(remember){
        localStorage.setItem("remember",JSON.stringify({email:form.email, password:form.password}))
      }else{
        localStorage.removeItem("remember");
      }
      router.push('/Main')
    }
  },[exito])

  const handleRecaptcha = (change:any)=>{
    setForm({
      ...form,
      ReCAPTCHAForm: true
    })
  }

  return (
    <div
      className=" w-screen h-screen fixed inset-0 z-0 bg-cover bg-righ overflow-auto bg-white  dark:bg-darkBG dark:text-white  bg-no-repeat bg-center flex items-start md:items-center justify-center box-border  p-2"
      // style={{ backgroundImage: `url('/Images/Login/imagen_04Login.jpg')` }}
    >
      <div className=" w-[800px] min-h-full md:min-h-min  rounded-xl  flex justify-center items-center box-border p-2 relative">

        <img className=" rounded-xl w-1/2 h-full hidden md:block" src="/Images/Login/Imagen_03Login.png" alt="Estudiante"/>
        

      

        <div className=" w-full md:w-1/2 h-full flex flex-col justify-center items-center box-border p-4">
          <LogoHome />
          <span className=" uppercase p-5 text-4xl font-title">
            <strong>Iniciar sesion</strong>
          </span>
          <p>No tienes cuenta?<Link className=" font-medium underline" href="/Register">Crear cuenta</Link></p>
          <FormW
            classnameContainer=" mt-2 w-3/4"
            form={form}
            classname="py-2 px-2 w-full border border-black rounded-xl"
            onChange={handleForm}
            list={Login}
          />
          <div className=" box-border p-2">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleRecaptcha}
          />
          </div>

          <div className="w-full flex justify-end items-center">
           <p className="font-medium underline cursor-pointer">Olvidaste tu contraseña?</p>
          </div>

          <IButtonComponent btnIcon={<IoIosLogIn/>}  className='w-full' classNameContend='flex justify-center p-2 rounded-xl bg-primaryWellTalkUni items-center w-full mt-auto transition' classNameContainer='flex mt-4 w-full justify-center items-center' disabled={disabled} actionOnClick={LoginCreate} label="Ingresar"/>

        </div>


        <div className="absolute bottom-0 right-0 p-1 flex justify-center items-center">
          
        <input
          type="checkbox"
          checked={remember}
          onChange={handleCheckboxChange}
        />
          <p>Recordarme</p>
        </div>


      </div>
    </div>
  );
};

export default LoginTemplate;
