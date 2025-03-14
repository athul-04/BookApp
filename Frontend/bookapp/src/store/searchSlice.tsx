import { createSlice } from "@reduxjs/toolkit";

const initialState={keyword:""};
const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        updateState(state,action){
            state.keyword=action.payload.keyword;
        }
    }
})

export default searchSlice;
export const searchSliceActions=searchSlice.actions;