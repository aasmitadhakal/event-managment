
 function Login() {
  
  
  return (
    <>
     <div className='  mt-24 mx-60 rounded-lg drop-shadow-2xl h-128 centered bg-white'>
      <div className='grid grid-cols-2 '>
      <div className=' ' >
      <img src='login.jpg' className='h-124 w-94'  alt=''></img>
      </div>
      <form className=' mt-12'>
        <div className='text-3xl mx-24 mt-6 font-bold text-orange-600 '>Login</div>
        {/* for email */}
        <div>
            <input
              className=" w-96 shadow appearance-none border my-6  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="email"
              type="text"
              placeholder="Email"
              name="email"
            />
        </div>
         {/* for password */}
         <div> 
            <input
              className=" w-96 shadow appearance-none  my-4 border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none 
              focus:shadow-outline  focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
              id="email"
              type="text"
              placeholder="Password"
              name="email"
            />
          </div>
          {/* for buttom */}
          <div>
      <button className='bg-orange-600 text-white mt-4 mx-24 px-12 py-2  rounded'>Login</button>
          </div>
          {/* for text */}
          <div
          className='text-slate-500  ml-44 mt-2'>
          Don't have an account ?<span className="hover:underline hover:decoration-sky-500 hover:decoration-2">Signup</span>
          </div>
      </form>
      </div>
       
  
      
      </div>
     
     
    </>
  );
}
export default Login;
