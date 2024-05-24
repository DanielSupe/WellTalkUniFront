import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { LoginUserFail, LoginUserSuccess } from "./LoginSlice"
import Swal from "sweetalert2"
import UrlBack from "@/helpers/url_helper"


const LoginUserProfileFunt = async (data:any) =>{
    const {email,password} = data.payload
    try {
        const rep = await axios.post(`${UrlBack}/auth/login`,{
            "email": email,
            "password": password
        })
        console.log(rep,"dataa")
        localStorage.setItem("USER",JSON.stringify(rep.data))
        return rep;
    } catch (error:any) {
        throw error;

    }
    
}


function* LoginUserProfile(data:any) {
    try {
        const resp: Promise<any> = yield call(LoginUserProfileFunt,data)
        yield put(LoginUserSuccess(resp))
        Swal.close()
        Swal.fire({
            title:"success",
            icon:"success"
        })
    } catch (error:any) {
        yield put(LoginUserFail(error))
        Swal.close()
        Swal.fire({
            title:error.response ? error.response.data.message : "An error occurred",
            icon:"error"
        })
    }
    
}





function* LoginSaga (){
    yield takeLatest('Login/LoginUser', LoginUserProfile)
}

export default LoginSaga;