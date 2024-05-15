
import { transformarCitas } from "@/helpers/tool_helpers";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    citas: [],
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
        getReinicioExito: (state)=>{
            state.exito = false;
        },
        getCitasSuccess: (state,action)=>{
            state.citas = transformarCitas(action.payload.data.appointments)
            state.Loading = false;
        },
        getCitasFail: (state,action)=>{
            state.Loading = false;
        },
        //POST-----------------------------------------
        CreateCitas: (state,action)=>{
            state.Loading = true;
        },
        CreateCitasSuccess: (state,action)=>{
            state.Loading = true;
            state.exito = true;
        },
        CreateCitasFail: (state,action)=>{
            state.Loading = true;
            state.exito = false;
        },
    }
})

export const {getCitas,getCitasSuccess,getCitasFail,CreateCitas,CreateCitasSuccess,CreateCitasFail,getReinicioExito} = CitasSlice.actions;
export default CitasSlice.reducer
