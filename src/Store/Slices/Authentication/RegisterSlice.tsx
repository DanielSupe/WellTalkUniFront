import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User: {},
    Loading: false,
    error:{},
    exito: false
};

export const RegisterSlice = createSlice({
    name:"Register",
    initialState,
    reducers:{
        RegisterUser: (state,action)=>{
            console.log("sliceee")
            state.Loading = true;
        },
        RegisterUserSuccess: (state,action)=>{
            state.User = action.payload
            state.Loading = false;
            state.exito = true;
        },
        RegisterUserFail: (state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})

export const { RegisterUser, RegisterUserSuccess, RegisterUserFail} = RegisterSlice.actions;
export default RegisterSlice.reducer