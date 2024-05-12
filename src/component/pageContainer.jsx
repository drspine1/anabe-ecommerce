import data from "../component/pageData"
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { IoIosStarOutline } from "react-icons/io";
const PageContainer = () => {
  const dispatch = useDispatch()
  return ( 
    <>
   <div className="mt-12 w-[90%] mx-auto text-center">
    <div className="cart-1 mx-auto w-full text-center relative">
      <h1 className="bg-blue-500 p-4 rounded-md uppercase text-lg font-medium text-white">new online  store</h1>
      <img src="images/blue-cart.jpg" alt="" className="w-full h-[22rem] my-10 mb-20 "/>
      <div className="absolute top-[50%] left-[5%]">

      <h2 className="uppercase text-[#f6f6f6] text-xl md:text-2xl text-left "><span className=" text-[#43686e] text-2xl  md:text-4xl  ">highlights</span> <br />watches,headset,rings and <br /> laptop with limitlesss choices</h2>
          <h3 className=" text-xl pt-2 text-[#1f565f] text-left mb-10 ">up to 30% off onsale products</h3>
      </div>
      
    </div>
    <h1 className=" uppercase text-xl font-bold text-blue-500">new arrivals</h1>
   <div className="page-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
     
     {data.map((data) =>{
      const {id,name,prize,img} = data
      return <div className="items-list shadow-lg  shadow-slate-500  bg-white mt-8 pb-4 px-2 rounded-md" key={id}>
      <div className="mt-2">
       <div className="img mx-auto text-center ">
         <img src={img} alt="" className="w-[10rem] h-[7rem] rounded  -hidden  mx-auto text-center"/>
       </div>
       <div className="prize-name mt-4">
         <h3  className="text-red-700 tex-lg uppercase  ">{name}</h3>
         <h3 className=" text-xl">N{prize}</h3>
         <div className="flex justify-center mt-2">
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
          <IoIosStarOutline className="text-red-700 text-lg"/>
         </div>
       </div>
       <div className="add-star mt-2 px-5">
         <button className="add-btn bg-[#291d89] px-5 py-2 text-[whitesmoke] capitalize text-xl rounded shadow-2xl hover:opacity-70 transition duration-500 mt-2" onClick={()=>dispatch(addToCart(data))}>add to cart</button>
       </div>
      </div>
   </div>
     })}
  </div>
   </div>

   
    </>
   );
}
 
export default PageContainer;