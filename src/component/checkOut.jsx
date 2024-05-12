import { useSelector } from "react-redux";


import { useState } from "react";
const CheckOut = () => {
  const {cartData,amount,total} = useSelector((store) => store.cart)
 
  const [checkoutInput,setCheckoutInput]=useState ({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:"",
    city:"",
    state:"",
    code:""
  })
  const handleInput = (e)=>{
    e.persist();
    setCheckoutInput({...checkoutInput,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const data ={
      firstName:checkoutInput.firstName,
      lastName:checkoutInput.lastName,
      email:checkoutInput.email,
      phone:checkoutInput.phone,
      message:checkoutInput.message,
      city:checkoutInput.city,
      state:checkoutInput.state,
      code:checkoutInput.code

    }
  Axios.post('/api/place.order',data).then(res=>{
      if(res.data.status === 200){
        swal('order placed successfully',res.data.message,'success')
    
      }
    })
  }

  if (amount < 1){
    return <div className="empty grid place-items-center pt-12 bg-white w-full h-[100vh]">
      <h1 className="capitalize text-2xl font-bold text-[#0b0716]">your cart is currently empty</h1>
      
   
    </div>
   }

  return ( 
    <>
<div className="w-[100%]  text-center mx-auto">
  <div className="bg-blue-400 w-full h-16 flex items-center justify-center mt-14 sm:mt-24 lg:mt-28 text-2xl font-semibold text-white"><h1>check-out</h1></div>
<div className="checkout-container px-[1.5rem] flex justify-between flex-col-reverse lg:flex-row gap-[5%] mt-20 ">
      <div className="form-side flex-[40%] border border-[grey] p-4 rounded-sm h-[34rem] mt-20 lg:mt-0">
        <h1 className="text-lg uppercase font-medium py-2 mb-6 text-white bg-blue-400 ">basic information</h1>
<form className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="info">
          <label htmlFor="name" className="text-left block ml-4 uppercase font-semibold pb-1">first name</label>
          <input type="text" name="firstName"onChange={handleInput}
          value={checkoutInput.firstName}  className="w-full p-1 text-lg outline-0 rounded-sm border-2 border-[grey]"/>
          <span></span>
      </div> 
      <div className="info">
          <label htmlFor="name" className="text-left block ml-4 uppercase font-semibold pb-1">last name</label>
          <input type="text" name="lastName" onChange={handleInput}
          value={checkoutInput.lastName}   className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/>
            <span></span>
      </div>
      <div className="info">
      <label htmlFor="phone" className="text-left block ml-4 uppercase font-semibold pb-1">phone number</label>
      <input type="text" name="phone" onChange={handleInput} value={checkoutInput.phone}  className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/>
        <span></span>
      </div>
      <div className="info">
      <label htmlFor="email" className="text-left block ml-4 uppercase font-semibold pb-1">email address</label>
      <input type="text" name="email" onChange={handleInput}
      value={checkoutInput.email}   className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/> 
        <span></span>
      </div>
  </div>

  <div className="info my-5">
    <label htmlFor="text" className="text-left block ml-4 uppercase font-semibold pb-1"> full address</label>
<textarea name="message" onChange={handleInput} value={checkoutInput.message}   className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm" ></textarea>
    <span></span>
  </div>
  <div className="flex flex-col md:flex-row gap-3 justify-between">
  <div className="info">
              <label htmlFor="text" className="text-left block ml-4 uppercase font-semibold pb-1">city</label>  
              <input type="text" name="city" onChange={handleInput} value={checkoutInput.city}   className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/>
              <span></span>
  </div>
  <div className="info">
    <label htmlFor="text" className="text-left block ml-4 uppercase font-semibold pb-1">state</label>
    <input type="text" name="state" onChange={handleInput} value={checkoutInput.city}  className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/>
    <span></span>
  </div>
  <div className="info">
    <label htmlFor="text" className="text-left block ml-4 uppercase font-semibold pb-1">zip code</label>
    <input type="text" name="code" onChange={handleInput} value={checkoutInput.code}   className="w-full p-1 border-2 border-[grey] text-lg outline-0 rounded-sm"/>
    <span></span>
  </div>
  </div>
  <button className="text-left mt-5  bg-blue-400 px-2 border-[0] py-2 text-white block uppercase text-lg rounded font-medium"onClick={handleSubmit}>place order</button>

</form>
      </div>
      <div className="items-side flex-[55%]">
        <table className="w-full" >
          <tr className="border-b-2 border-gray-300">
            <th className="pb-4 uppercase text-sm sm:text-lg font- ">items</th>
            <th className="pb-4 uppercase text-sm sm:text-lg font-bold ">qty</th>
            <th className="pb-4 uppercase text-sm sm:text-lg font-bold ">prize</th>
            <th className="pb-4 uppercase text-sm sm:text-lg font-bold ">total</th>
           
            
              
          </tr>
          {cartData.map((data)=>{
            return <tr key={data.id} className="">
              <td className="py-3 capitalize text-sm sm:text-lg lg:text-sm font-medium">{data.name}</td>
              <td className="py-3 capitalize text-sm sm:text-lg lg:text-sm font-medium">{data.cartQuantity}</td>
              <td className="py-3 capitalize text-sm sm:text-lg lg:text-sm font-medium">{data.prize}</td>
              <td className="py-3 capitalize text-sm sm:text-lg lg:text-sm font-medium">N{data.prize*data.cartQuantity}</td>
            
              <tr>
                
              </tr>
            </tr>
          })}
          <tr className="border-2 border-slate-400">
            <th colSpan="3" className="py-4 uppercase text-lg md:text-lg font-medium">subtotal:</th>
            <th className=" text-lg md:text-xl font-bold ">N{total.toFixed(2)}</th>
            <th></th>
            <th ></th>
          </tr>
        </table>
      </div>
    </div>
</div>
    </>
   );
}
 
export default CheckOut;