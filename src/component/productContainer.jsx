
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addToCart } from "../features/cart/cartSlice"
import { useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
const FilteredProducts = () => {
   const dispatch = useDispatch()
  const {productsFiltered} = useSelector((store)=>store.filter)
 
const {category} = useParams()
  
  return ( 
    <>
    <div className="products-container mt-32 w-[80%] mx-auto text-center">
      <h1 className="text-left uppercase text-2xl text-red-700">{category}</h1>
  <div className="parent-container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {productsFiltered.filter((data) => data.category === category).map((items) =>{
      const {id,img,name,prize} = items
      return <div className="items-list shadow-lg  shadow-slate-500  bg-white mt-8 pb-4 rounded-md " key={id}>
         <div className="mt-2">
          <div className="img mx-auto text-center ">
            <img src={img} alt="" className="w-[8rem] h-[8rem] rounded  -hidden  mx-auto text-center bg-transparent"/>
          </div>
          <div className="prize-name mt-4">
            <h3  className="text-red-700 tex-xl uppercase  ">{name}</h3>
            <h3 className=" text-xl">N{prize}</h3>
            <div className="flex justify-center mt-2">
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
         </div>
          </div>
          <div className="add-star mt-2 px-5">
            <button className="add-btn bg-[#291d89] px-5 py-2 text-[whitesmoke] capitalize text-xl rounded shadow-2xl hover:opacity-70 transition duration-500 mt-2" onClick={()=>dispatch(addToCart(items))}>add to cart</button>
          </div>
         </div>
      </div>
      
     }) }
   
  </div>
    </div>
    </>
   );
}
 
export default FilteredProducts;