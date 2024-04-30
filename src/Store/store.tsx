import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./Slices/Authentication/RegisterSlice";
import { saga } from "./sagas";
import { rootSaga } from "./sagas";
import LoginSlice from "./Slices/Authentication/Login/LoginSlice";
import CitasSlice from "./Slices/Citas/CitasSlice";
export const store = configureStore({
    reducer:{
        Register:RegisterSlice,
        Login:LoginSlice,
        Citas: CitasSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch