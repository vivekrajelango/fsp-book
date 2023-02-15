import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        getList:{},
        list:[],
        // consolidated:[]
    },
    reducers:{
        getItem:(state, {payload})=>{
            state.getList = payload
        },
        addItem:(state, {payload})=>{
            state.list= [...state.list, payload]
        },
        // consolidatedList:(state, {payload})=>{
        //     state.consolidated = payload
        // }
    }
})

export const {getItem, addItem} = userSlice.actions;
export default userSlice.reducer;