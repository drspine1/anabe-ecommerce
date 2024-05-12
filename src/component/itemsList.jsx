import { useDispatch,useSelector } from "react-redux";
import { removeCart,DecreaseCartQuantity,increaseCartQuantity,clearCart } 
from "../features/cart/cartSlice";

const ItemsList = ({prize,img,name,id,cartQuantity}) => {
  const dispatch = useDispatch()
  
  

  return ( 
    <>
   <div className="img-desc flex justify-between items-center mt-10 bg-white shadow-lg  shadow-slate-500 py-3 rounded-md h-[15rem] md:h-[13rem]">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 items-center  p-4">
      <img src={img} alt=""  className=" w-[7rem] h-[5rem] md:w-[9rem] md:h-[6rem]  overflow-hidden rounded-lg"/>
       <div className="text-left  ">
        <div className="">
       <h3 className="text-red-700 tex-xl uppercase  ">{name}</h3>
       <h3 className=" text-xl">${prize}</h3>
       </div>
       <div className="del-star">
       <button className="add-btn bg-[red] px-5 py-2 text-[whitesmoke] capitalize text-lg md:text-xl rounded shadow-2xl hover:opacity-70 transition duration-500 mt-2" onClick={()=>dispatch(removeCart(id))}>remove</button>
       </div>
       </div>
      </div>

       <div className="buttons flex flex-col lg:flex-row  mr-5">
        <button className="decrease-btn mx-2 text-xl font-bold bg-violet-300 w-8 rounded text-[midnightblue] cursor-pointer" onClick={()=>{
         if(cartQuantity === 1){
            dispatch(removeCart(id))
            return;
         }
         dispatch(DecreaseCartQuantity({id}))}}>-</button>

        <p className="counting mx-2 text-lg font-bold">{cartQuantity}</p>
        <button className="increase-btn mx-2 text-xl font-bold bg-violet-300 w-8 rounded text-[midnightblue] cursor-pointer" onClick={()=> dispatch(increaseCartQuantity({id}))}>+</button>
       </div>
    </div>
    
    </>
   );
}
 
export default ItemsList;