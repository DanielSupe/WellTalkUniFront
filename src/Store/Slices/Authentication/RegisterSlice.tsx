import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User: {},
    Loading: false,
    error:{},
    prueba:1
};

export const RegisterSlice = createSlice({
    name:"Register",
    initialState,
    reducers:{
        RegisterUser: (state)=>{
            state.Loading = true;
        },
        RegisterUserSuccess: (state)=>{
            state.Loading = false;
        },
        RegisterUserFail: (state)=>{
            state.Loading = false;
        }
    }
})

export const { RegisterUser, RegisterUserSuccess, RegisterUserFail} = RegisterSlice.actions;
export default RegisterSlice.reducer