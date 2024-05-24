'use client'


import UrlBack from "@/helpers/url_helper"
import axios from "axios"
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { RegisterUserFail, RegisterUserSuccess } from "./RegisterSlice"
import Swal from "sweetalert2"


function* RegisterUserProfile(data:any) {
    // console.log(data,"dasdsa")
    const {LastName,University,address,city,date,department,email,name,password,phoneNumber,profile} = data.payload

    let object:any = { 
        user:{
            email:email,
            password:password,
            userType: profile.toUpperCase()
        },
        profile:{
            name: name,
            lastName: LastName,
            phoneNumber: phoneNumber,
            address: address,
            university: University,
            dateOfBirth: date,
            department:department ,
            city:city
    
        }
    }


    switch(data.payload.profile){
        case "STUDENT":
        const {semester,career} = data.payload
         object = {
            ...object,
            profile:{
                ...object.profile,
                semester,
                career
            }
            
        }
        case "PSYCHOLOGIST":
            case "STUDENT":
                const {specialty,yearsExperience} = data.payload
                 object = {
                    ...object,
                    profile:{
                        ...object.profile,
                        specialty,
                        yearsExperience
                    }
                    
                }
    }

    try {
       const rep: Promise<any> = yield axios.post(`${UrlBack}/auth/register`,object)
       yield put(RegisterUserSuccess(rep))
       Swal.close()
       Swal.fire({
           title:"success",
           icon:"success"
       })
    } catch (error:any) {
        yield put(RegisterUserFail(error.response.message))
        Swal.close()
        Swal.fire({
            title:error.response.data.message,
            icon:"error"
        })
    }

}





function* AuthenticationSaga (){
    yield takeLatest('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;