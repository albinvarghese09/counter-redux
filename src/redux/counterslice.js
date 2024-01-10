import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: 'counterapp',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state,action) => {
            console.log("increment clicked");
            state.value = state.value + action.payload;
        },
        decrement:(state ,action)=>{
            state.value =state.value -action.payload;
        },
        reset:(state)=>{
            state.value= state.value =0;
        }
    }
})

export const { increment , decrement , reset} = counterslice.actions;

export default counterslice.reducer;
