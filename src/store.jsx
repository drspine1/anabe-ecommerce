import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./features/slider/sliderSlice"
import filterReducer from "./features/filter/filterSlice"
import cartReducer from "./features/cart/cartSlice"
import modalReducer from "./features/modal/modalSlice"
export  const Store = configureStore(
  {
    reducer:{
       slide:slideReducer,
       filter:filterReducer,
       cart:cartReducer,
       modal:modalReducer

    }
  }
)