import { createSlice } from "@reduxjs/toolkit";
import data from "../productData"



const initialState={
  productsFiltered: localStorage.getItem("filter") ? JSON.parse(localStorage.getItem("filter")):data,


}

const filterSlice = createSlice({
  name:"filter",
  initialState,
  reducers:{
  filtProducts(state,action){
     const filt = data.filter((item) => item.category === action.payload)
     state.productsFiltered =filt 
     localStorage.setItem("filter",JSON.stringify(state.productsFiltered))
  },
  },

  
})

export const {filtProducts} = filterSlice.actions
export default filterSlice.reducer