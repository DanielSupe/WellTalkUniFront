import {put, call, takeEvery, takeLatest} from "redux-saga/effects"


function* RegisterUserProfile() {
    console.log("ENTROOOO AQUI")
}





function* AuthenticationSaga (){
    yield takeEvery('Register/RegisterUser', RegisterUserProfile)
}

export default AuthenticationSaga;