import { useState } from "react"
import shopsAdd from "./storeData"
const Shops = () => {
  const [data,setData] =useState(shopsAdd)
 
  return ( 
    <>
    <div className="shops mt-36 w-[100%] px-4 md:w-[80%] lg:w-[50%] text-center mx-auto">
      <p className="text-lg font-medium text-[#212121] pb-8">Reach out to us to buy your product of choice at affordable price at any of our following shops below</p>
       {data.map((shop) =>{
        const {email,phone,address,id} = shop
        return <div className="shop capitalize tetx-xl font-semibold mb-6 border border-y-2 border-x-2 border-[gray] p-3" key={id}>
          <p className="pb-1">{address}</p>
          <h3 className="pb-1">{phone}</h3>
          <h2>{email}</h2>
        </div>
       })} 
    </div>
    </>
   );
}
 
export default Shops;