
import CartItems from "./component/cartItems"
import Home from "./component/home"
import FilteredProducts from "./component/productContainer"
  import { useDispatch,useSelector } from "react-redux"
import Navbar from "./navBar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { totalCartQuantity } from "./features/cart/cartSlice"
import { useEffect } from "react"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop"
import Shops from "./shop"
import Contact from "./contact"
import CheckOut from "./component/checkOut"
function App() {
   const dispatch = useDispatch()
   const {cartData} = useSelector((store) => store.cart)
   useEffect(()=>{
      dispatch(totalCartQuantity())
   },[cartData],dispatch)
 return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>

    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/filtered/:category" element={<FilteredProducts/>}/>
    <Route path ="/cart" element= {<CartItems/>}/>
    <Route path ="/shop" element={<Shops/>}/>
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/check" element={<CheckOut/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     </>
  )
}

export default App
