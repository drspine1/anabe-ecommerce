import { useDispatch } from "react-redux";
import { closeModal } from "./features/modal/modalSlice";
import { clearCart } from "./features/cart/cartSlice";


const ModalContainer = () => {
  const dispatch = useDispatch()
  return ( 
    <>
    <div className="aside px-8">
    <aside className="fixed top-[50%] left-[50%] w-[90%] sm:w-[30rem] h-[10rem] flex flex-col justify-center items-center bg-[#212121] transform translate-x-[-50%] translate-y-[-50%] rounded-sm p-6">
      <p className="text-[#d4c3c3] text-xl mb-4">Do you want to remove all items from cart?</p>
      <div className="aside-buttons flex gap-5">
        <button className="confirm tetx-xl uppercase bg-red-700 text-[whitesmoke] font-bold w-28 py-2 rounded-sm" onClick={() =>{
          dispatch(closeModal())
          dispatch(clearCart())
        }}>confirm</button>
        <button className="cancel tetx-xl uppercase  bg-green-700 text-[whitesmoke] font-bold w-28 py-2 rounded-sm" onClick={() => dispatch(closeModal())}>cancel</button>
      </div>
    </aside>
    </div>
  
    </>
   );
}
 
export default ModalContainer;