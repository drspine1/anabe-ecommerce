
import { Link } from "react-router-dom";
import { filtProducts } from "../features/filter/filterSlice";
import { useDispatch } from "react-redux";

const  FilterButton = () => {
  const dispatch= useDispatch()
  const buttons=[
    "wristwatch","ring","laptop","headset"
  ]

  
  return ( 
    <>
    
  <div className="filter-bnt-container text-center mx-auto flex  flex-wrap justify-center mt-40  gap-5  py-4 ">
  
  {buttons.map((btn,index) =>{
return <div className="btns" key={index}>
  <Link to={`/filtered/${btn}` }>
    <button className=" uppercase text-xl border-2 border-[#39117fdf] py-3 px-4 rounded-md hover:bg-[#39117fdf]  hover:text-white transition-all duration-500"onClick={() => dispatch(filtProducts(btn))}>{btn}</button>
  </Link>
</div>
    })}
  
  </div>
    </>
   );
}
 
export default  FilterButton;