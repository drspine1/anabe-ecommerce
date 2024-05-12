import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return ( 
    <>
    <footer className="w-full mx-auto text-center grid grid-cols-2  md:grid-cols-4 sm:grid-cols-4  bg-[#090926] mt-20 text-[#b7b3b3ec] p-10 ">
      
      <div className="footer-left mb-6 md:mb-0">
        <h1 className="text-xl font-medium capitalize text-[whitesmoke] pb-4">anabe tech</h1>
        <ul>
          <li>news</li>
          <li>careers</li>
          <li>investors</li>
          <li>purpose</li>
          <li>sustainability</li>
        </ul>
      </div>
      <div className="footer-center p-0 mb-6 md:mb-0">
        <h1 className="text-xl font-medium capitalize text-[whitesmoke] pb-4">get help</h1>
        <ul>
        
         <li>payment</li>
          <li>options</li>
         <li>balance</li>
          <li>faq</li>
          <li>blog</li>
        </ul>
      </div>
      <div className="footer-right mb-6 md:mb-0">
        <h1 className="text-xl font-medium capitalize text-[whitesmoke] pb-4">company</h1>
        <ul>
          <li>gift cards</li>
          <li>promotions</li>
          <li>find store</li>
          <li>feedback</li>
          <li>blogs</li>
          <li>journal</li>
          <li>help center</li> 
        </ul>
      </div>

      <div className="footer-social mb-6 md:mb-0">
        <h1 className="text-xl font-medium capitalize text-[whitesmoke] pb-4">socials</h1>
        <ul className=" flex justify-center flex-col items-center">
          <li><FaFacebookF className="text-2xl mb-2 transform hover:translate-x-2 transition duration-500 cursor-pointer"/></li>
          <li><FaInstagram className="text-2xl mb-2 transform hover:translate-x-2 transition duration-500 cursor-pointer"/></li>
          <li><FaWhatsapp className="text-2xl mb-2 transform hover:translate-x-2 transition duration-500 cursor-pointer"/></li>
          <li><FaXTwitter className="text-2xl mb-2 transform hover:translate-x-2 transition duration-500 cursor-pointer"/></li>
          
        </ul>
      </div>
    </footer>
    </>
   );
}
 
export default Footer;