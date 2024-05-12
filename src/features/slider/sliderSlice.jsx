
import { createSlice } from "@reduxjs/toolkit";


 const initialState ={

  value:0,
  length:4
 }

 const slideSlice = createSlice(
  {
    name:"slide ",
    initialState,
    reducers:{
      indexSlide(state,action){
         state.SliderIndex = action.payload
      },
      nextSlide(state,action){
         state.value = action.payload > state.length-1 ? 0 :action.payload
      },
      prevSlide(state,action){
            state.value= action.payload < 0? state.length-1 :action.payload
      },
      dotSlide(state,action){
        state.value = action.payload
      }
    },
  }
 )
 export const {indexSlide,nextSlide,prevSlide,dotSlide} =slideSlice.actions

 export default slideSlice.reducer