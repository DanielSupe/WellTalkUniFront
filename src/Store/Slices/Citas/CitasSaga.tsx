'use client'
import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import Swal from "sweetalert2"
import UrlBack from "@/helpers/url_helper"
import { CreateCitasFail, CreateCitasSuccess, getCitasSuccess, getListPsicologosFail, getListPsicologosSuccess } from "./CitasSlice"


function* GetCitas(data:any) {
    
    const user = localStorage.getItem("USER") || "{}";
   const typeStudent = JSON.parse(user).studentProfile || "";
   const typePsychologist = JSON.parse(user).psychologistProfile || "";

   if(typeStudent){
        try {
            const rep: Promise<any> = yield axios.get(`${UrlBack}/student-profiles/${typeStudent.id}`)//Cambiar ruta
            yield put(getCitasSuccess(rep))
        } catch (error:any) {
            console.log(error,"ERRORR")

            Swal.close()
            Swal.fire({
                title:error.response.data.message,
                icon:"error"
            })
        }

   }
   else if(typePsychologist){
    try {
        const rep: Promise<any> = yield axios.get(`${UrlBack}/psychologist-profiles/${typePsychologist.id}`)//Cambiar ruta
        yield put(getCitasSuccess(rep))
    } catch (error:any) {
        console.log(error,"ERRORR")

        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }
   }

    
}


function* CreateCitas({payload}:any) {
    const { Date,Hora,Psicologo} = payload;
    const user = localStorage.getItem("USER") || "";
    const data = JSON.parse(user)
    
    try {
        const rep: Promise<any> = yield axios.post(`${UrlBack}/appoinments`,{
            "date": `${Date}`,
            "student": data.studentProfile.id,
            "psychologist": Number(Psicologo),
            "time": `${Hora}`
          }
        )//Cambiar ruta
            yield put(CreateCitasSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success"
            })
    } catch (error:any) {
        console.log(error,"ERRORR")
        yield put(CreateCitasFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }
    
}

const axiosGetPsicolgosList = async()=>{
    const rep:any = await axios.get(`${UrlBack}/psychologist-profiles`)//Cambiar ruta
    console.log(rep, "dasndsajdnasj")
    return rep.data;
}


function* GetPsicologosList() {
    try {
        const rep: Promise<any> = yield call(axiosGetPsicolgosList)
        yield put(getListPsicologosSuccess(rep))
    } catch (error:any) {
        yield put(getListPsicologosFail(error))
    }
    
}


function* CitasSaga (){
    yield takeLatest('Citas/getCitas',GetCitas),
    yield takeLatest('Citas/CreateCitas',CreateCitas)
    yield takeLatest('Citas/getListPsicologos',GetPsicologosList)
}

export default CitasSaga;