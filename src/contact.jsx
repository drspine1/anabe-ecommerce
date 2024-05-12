const Contact = () => {
  return ( 
    <>
    <div className="contact-container px-4 w-[100%] sm:w-[80%] md:[50%] lg:w-[45%] mx-auto text-center mt-[8rem] md:mt-[12rem]">

    
    <h2 className="text-xl font-bold text-blue-600">Get in touch</h2>
      <form className="w-[100%] flex flex-col mt-8">
        <input type="text" name="name" placeholder="input your full name" className="mb-4 p-4 rounded border-0 outline-0 bg-[whitesmoke]"/>
        <input type="email" name="email" placeholder="input your email id" className="mb-4 p-4 rounded border-0 outline-0 bg-[whitesmoke]"/>
        <textarea name="text" placeholder="enter your messsage"  className="mb-4 p-4 rounded border-0 outline-0 bg-[whitesmoke]"></textarea> 
        <button type="submit" className=" bg-[#291d89] px-5 py-2 text-[whitesmoke] capitalize text-xl rounded shadow-2xl hover:opacity-80 transition duration-500 mt-2 w-[8rem] mx-auto"> submit</button>
      </form>
    </div>
    </>
   );
}
 
export default Contact;