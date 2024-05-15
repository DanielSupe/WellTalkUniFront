'use client'
import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import Swal from "sweetalert2"
import UrlBack from "@/helpers/url_helper"
import { CreateCitasFail, CreateCitasSuccess, getCitasSuccess } from "./CitasSlice"


function* GetCitas(data:any) {
    
    const user = localStorage.getItem("USER") || "";
   const typeStudent = JSON.parse(user).data.studentProfile;
   const typePsychologist = JSON.parse(user).data.psychologistProfile;

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

   }

    
}


function* CreateCitas({payload}:any) {
    console.log(payload, "dataaa en saga")
    const { Date,Hora,Psicologos} = payload;
    const user = localStorage.getItem("USER") || "";
    const data = JSON.parse(user)
    
    try {
        const rep: Promise<any> = yield axios.post(`${UrlBack}/appoinments`,{
            "date": `${Date}`,
            "student": data.data.id,
            "psychologist": 1
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
function* CitasSaga (){
    yield takeLatest('Citas/getCitas',GetCitas),
    yield takeLatest('Citas/CreateCitas',CreateCitas)
}

export default CitasSaga;