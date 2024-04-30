import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { LoginUserFail, LoginUserSuccess } from "./LoginSlice"
import Swal from "sweetalert2"
import UrlBack from "@/helpers/url_helper"


function* RegisterUserProfile(data:any) {
    const {email,password} = data.payload
    try {
        const rep: Promise<any> = yield axios.post(`${UrlBack}/auth/login`,{
            "email": email,
            "password": password
        })
          yield put(LoginUserSuccess(rep))
            Swal.close()
            Swal.fire({
                title:"success",
                icon:"success"
            })
    } catch (error:any) {
        console.log(error,"ERRORR")
        yield put(LoginUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }
    
}





function* LoginSaga (){
    yield takeLatest('Login/LoginUser', RegisterUserProfile)
}

export default LoginSaga;