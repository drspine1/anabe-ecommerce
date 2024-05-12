import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartData :localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[],
  amount:0 ,
  total:0,

}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
     addToCart(state,action){
      const itemIndex = state.cartData.findIndex((item) =>item.id === action.payload.id)
      if(itemIndex >= 0){
        state.cartData[itemIndex].cartQuantity +=1
      } else{
        
      
      state.cartData.push({
        ...action.payload,
        cartQuantity:1
 
      })
      localStorage.setItem("cart",JSON.stringify(state.cartData))
      }
     },
     clearCart(state){
        state.cartData = []
        localStorage.setItem("cart",JSON.stringify(state.cartData))
     },
     removeCart(state,action){
         state.cartData = state.cartData.filter((item) =>item.id !== action.payload)
         localStorage.setItem("cart",JSON.stringify(state.cartData))
     },
     increaseCartQuantity(state,action){
           const cartIndex = state.cartData.findIndex((item)=>item.id === action.payload.id )
           if (state.cartData[cartIndex].cartQuantity >=1){
            state.cartData[cartIndex].cartQuantity +=1
           }
           localStorage.setItem("cart",JSON.stringify(state.cartData))
     
     },
         DecreaseCartQuantity(state,action){
           const cartIndex = state.cartData.findIndex((item)=>item.id === action.payload.id)
           if (state.cartData[cartIndex].cartQuantity >1){
            state.cartData[cartIndex].cartQuantity -=1
           }
           localStorage.setItem("cart",JSON.stringify(state.cartData))
     },
     totalCartQuantity(state){
      let amount=0
      let total = 0
      let subtotal = 0
      state.cartData.forEach((item) =>{
        amount += item.cartQuantity
        total += item.cartQuantity * item.prize
        subtotal = item.cartQuantity * item.prize
        
      })
      state.amount = amount
      state.total = total
      state.subtotal = subtotal
     }
     
  }
})

export const {removeCart,clearCart,increaseCartQuantity,DecreaseCartQuantity,totalCartQuantity,addToCart} = cartSlice.actions
export default cartSlice.reducer

