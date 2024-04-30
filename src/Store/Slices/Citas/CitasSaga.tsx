import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import Swal from "sweetalert2"
import UrlBack from "@/helpers/url_helper"


function* GetCitas(data:any) {
    try {
        const rep: Promise<any> = yield axios.get(`${UrlBack}/appoinments`)//Cambiar ruta
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success"
            })
    } catch (error:any) {
        console.log(error,"ERRORR")

        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }
    
}

function* CitasSaga (){
    yield takeEvery('Citas/getCitas',GetCitas)
}

export default CitasSaga;