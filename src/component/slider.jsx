import { useDispatch,useSelector } from "react-redux";
import data from "../heroData"
import { nextSlide,prevSlide,dotSlide } from "../features/slider/sliderSlice";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";



const Slider = () => {
const dispatch = useDispatch()
const {value} = useSelector((store) => store.slide)
  return ( 
    <>
       <header className="w-full h-[calc(100vh-7rem)] relative">
          {data.map((slides)=>{
             const {img,desc,id} = slides
             return <div className={`${id===value ? "opacity-100 duration-700 scale-100 ease-in-out":"opacity-0 duration-700 scale-95 ease-in-out"} `} key={id}>
                <div className="img">
                  {id === value && (
                    <img src={img} alt="name"className="w-full h-[100vh] opacity-80 "/>
                  )}
                </div>
                <div className="top-[50%] absolute text-center left-0 mx-auto w-[100%]"> 
                  {id === value && (
                   <div className="w-[80%] lg:w-full px-8 ">
                     <p className=" uppercase text-[#f0f4ff] text-xl md:text-2xl text-left leading-[2rem] w-full">"{desc}"</p>
                   </div>
                  )}
                </div>
             </div>
          })}
              <div className="slide-btn ">
                <button className="absolute left-0 top-[50%] bg-[grey] p-2 rounded-full hover:bg-slate-400 transition duration-500 text-white" onClick={()=> dispatch(prevSlide(value-1))}><HiChevronLeft className="text-3xl font-bold"/></button>
                <button  className="absolute right-0 top-[50%] text-white bg-[grey]  hover:bg-slate-400 transition duration-500 p-2 rounded-full" onClick={()=> dispatch(nextSlide(value+1))}><HiChevronRight className="text-3xl font-bold"/></button>
              </div>
              <div className="dot-slide absolute bottom-[-6.5rem] left-[40%] md:left-[50%] flex ">
                {data.map((dot,index) =>{
                  return <div key={dot.id} className="mr-3 ">
                    <div className={index === value? "bg-[#39117fdf]  rounded-full p-2 cursor-pointer w-2":"bg-white rounded-full p-2 cursor-pointer"} onClick={()=>dispatch(dotSlide(index))}>

                    </div>

                  </div>
                })}
                       
              </div>
             
       </header>
    </>
   );
}
 
export default Slider;