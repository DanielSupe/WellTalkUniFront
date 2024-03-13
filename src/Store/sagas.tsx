import createSagaMiddleware from "@redux-saga/core";
import { all } from 'redux-saga/effects';
import AuthenticationSaga from "./Slices/Authentication/saga";
export const saga = createSagaMiddleware(
    
)

// Define tu función rootSaga que combina todas las sagas individuales
export function* rootSaga() {
  yield all([
    AuthenticationSaga(),


    //Mas sagas




  ]);
}