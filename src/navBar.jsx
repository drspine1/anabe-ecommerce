import {Link} from "react-router-dom"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showNav,setShowNav] = useState(false)
  const {amount} = useSelector((store) => store.cart)
 
  return ( 
    <>
    <header className="header w-full md-[5rem] lg:h-[7rem] fixed top-0 left-0 z-20  p-4 pt-0 bg-[#39117fdf] text-purple-100 shadow-2xl ">
      <div className="header-head hidden  sm:flex items-center justify-between px-8 bg-purple-100 text-[#39117fdf] w-full p-2">
      <h2 className="text-2xl capitalize font-semibold">
         <Link to="/shop">store</Link>
      </h2>
       <h3 className="flex items-center text-xl">customer care :<FaPhone className="mr-2 text-lg"/>  07039390206</h3>
         <div className="socials flex">
        <FaFacebookF  className="text-xl font-medium mx-1 transform hover:translate-y-[-0.3rem] transition-all duration-500 "/>
        <FaInstagram  className="text-xl font-medium mx-1 transform hover:translate-y-[-0.3rem] transition-all duration-500 "/>
        <FaWhatsapp  className="text-xl font-medium mx-1 transform hover:translate-y-[-0.3rem] transition-all duration-500 "/>
        <FaXTwitter  className="text-xl font-medium mx-1 transform hover:translate-y-[-0.3rem] transition-all duration-500 "/>
         </div>
      </div>
      <nav className="flex items-center justify-between pt-3 relative z-10">
        <h1  className="uppercase font-bold text-xl md:text-2xl">anabe tech.</h1>
      <ul className="hidden sm:block  ">
        <li className="  inline-block text-xl mx-8 capitalize font-bold "><Link to="/">home</Link></li>
        <li className="  inline-block text-xl mx-8 capitalize font-bold "><Link to="/contact">message us</Link></li>
      </ul>
            
      <ul className={`links sm:hidden absolute top-[140%] left-[-2rem] bg-slate-300 w-[50vw] h-[50vh] p-4  ${showNav ? " ml-0" : "ml-[-100%]   "}`} >
          <li className="  block text-xl mx-8 capitalize font-bold mb-4 mt-4" onClick={()=> setShowNav(false)}><Link to="/" className="text-2xl text-blue-600">home</Link></li>
          <li className="  block text-xl mx-8 capitalize font-bold   mb-4" onClick={()=> setShowNav(false)}><Link to="/contact" className="text-2xl  text-blue-600">contact</Link></li>
          <li className="  block text-xl mx-8 capitalize font-bold   mb-4" onClick={()=> setShowNav(false)}><Link to="/shop" className="text-2xl  text-blue-600">store</Link></li>
        </ul>


          <div className="right-nav flex gap-4 items-center">
          <Link to="/cart" className="cart relative mr-0 sm:mr-6">
          <TiShoppingCart className=" text-2xl md:text-4xl font-bold"/>
          <h3 className="absolute left-[90%] top-[-10px] text-xl">{amount}</h3>
          </Link>
         <button className="toggle-btn menu-icon block sm:hidden text-2xl font-black" onClick={()=>setShowNav(!showNav)}>
         <CiMenuKebab/>
         </button>
          </div>
      </nav>
    </header>
    </>
   );
}
 
export default Navbar;