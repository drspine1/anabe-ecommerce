import { useSelector,useDispatch } from "react-redux";
import Productss from "./productss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { openModal } from "../features/modal/modalSlice";
import ModalContainer from "../modalContainer";



const CartItems = () => {
 const {isOpen} = useSelector((store) =>store.modal)
  const {cartData,amount,total} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    if (amount < 1){
   return <div className="empty grid place-items-center pt-36 bg-white w-full h-[100vh]">
     <h1 className="capitalize text-2xl font-bold text-[#0b0716]">your cart</h1>
     <h2 className="my-2 text-lg font-medium">is currently empty</h2>
     <img src="/images/cart.jpg" alt="empty cart"  className="w-[18rem] h-full object-cover mb-4"/>
     <Link to="/" className="capitalize text-xl font-medium flex items-center italic"><HiOutlineArrowNarrowLeft className="mr-3 text-2xl"/>shop now</Link>
   </div>
  }

  return ( 
    <>
      {isOpen &&  ( <ModalContainer/>)}
    <div className="cart-items w-[100%] mx-auto text-center ">
    <div className="bg-blue-400 w-full h-16 flex items-center justify-center mt-14 sm:mt-24 lg:mt-28 text-2xl font-semibold text-white"><h1>cart-items</h1></div>
      <div className="cart-data px-[1.5rem] lg:px-[12rem]">
       <Productss cartData={cartData}/>
      </div>
  
   </div>
   <div className="cart-container_footer px-8 pb-6 border-t-[1px] border-[#4444] w-[70%] text-center mx-auto mt-10 pt-4">
       
       <div className="footer flex-col md:flex-row flex justify-between">
        
         <button className="clear-all bg-red-500 px-3 w-36 h-12  text-[whitesmoke] capitalize text-lg md:text-lg rounded shadow-2xl hover:opacity-70 transition duration-500 mt-2 mb-6" onClick={() =>dispatch(openModal())}>clear all</button>
         <div className="footer-content">
           <div className="total flex justify-between md:gap-4">
             <h1 className="uppercase text-lg sm:text-lg font-medium">subtotal:</h1>
             <h3 className="text-lg sm:text-xl uppercase font-medium pb-2">${total.toFixed(2)}</h3>
           </div>
           <Link to="/check" className=" font-medium block bg-[#291d89] px-9 py-2 text-[whitesmoke] capitalize text-lg h-12 w-36 md:text-xl rounded shadow-2xl hover:opacity-70 transition duration-500 my-2">checkout</Link>
           <h2 className="uppercase text-lg md:text-lg font-medium py-2  text-left">shipping fee:$200.00</h2>
          <Link to="/"className="capitalize text-lg md:text-lg text-left block flex items-center italic"> <HiOutlineArrowNarrowLeft  className="mr-3 text-2xl"/>continue shopping</Link>
         </div>
       </div>
     </div>

   
    </>
   );
}
 
export default CartItems;