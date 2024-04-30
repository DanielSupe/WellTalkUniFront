import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User: {},
    Loading: false,
    error:{},
    exito: false
};

export const CitasSlice = createSlice({
    name:"Citas",
    initialState,
    reducers:{
        //GET------------------------------------------
        getCitas: (state)=>{
            state.Loading = true;
        },
        getCitasSuccess: (state,action)=>{
            state.Loading = true;
        },
        getCitasFail: (state,action)=>{
            state.Loading = true;
        },
        //POST-----------------------------------------
        CreateCitas: (state,action)=>{
            state.Loading = true;
        },
        CreateCitasSuccess: (state,action)=>{
            state.Loading = true;
        },
        CreateCitasFail: (state,action)=>{
            state.Loading = true;
        },
    }
})

export const {getCitas} = CitasSlice.actions;
export default CitasSlice.reducer
