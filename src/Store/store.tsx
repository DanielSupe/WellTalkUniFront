import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "./Slices/Authentication/RegisterSlice";

export const store = configureStore({
    reducer:{
        RegisterSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch