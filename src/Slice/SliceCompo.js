import { createSlice } from "@reduxjs/toolkit"


const initialState=[
    {name:"ketan",age:"23",course:"MERN",batch:"oct"},
    {name:"ketan",age:"23",course:"MERN",batch:"oct"},
    {name:"ketan",age:"23",course:"MERN",batch:"oct"},
    {name:"ketan",age:"23",course:"MERN",batch:"oct"},
    {name:"ketan",age:"23",course:"MERN",batch:"oct"}

]

const SliceCompo=createSlice({
    name:"std_data",
    initialState,
    reducers:{
        Edit:(state,action)=>{
         state[action.payload.index]=action.payload.info
        },
        Add:(state,action)=>{
           state.push(action.payload)
        }

    }
})
export const {Edit,Add}=SliceCompo.actions;
export default SliceCompo.reducer