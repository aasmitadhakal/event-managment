import React from 'react'

function Register() {
  return (
    <>
    {/* Registration form */}
    <div className='bg-blue-200'>
        <div>
          {/* form  */}
          <div className='bg-white border '>
            <div>Registration Form</div>
            {/* for name  */}
            <div className='mx-24'>
            <input
              className=" w-96 shadow appearance-none border my-4  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="name"
              type="text"
              placeholder="Name"
              name="name"
            />
        </div>
        {/* for username */}
        <div  className='mx-24'>
            <input
              className=" w-96 shadow appearance-none border my-4  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="username"
              type="text"
              placeholder="username"
              name="username"
            />
        </div>
        {/* for email */}
        <div  className='mx-24'>
            <input
              className=" w-96 shadow appearance-none border my-4 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="email"
              type="text"
              placeholder="Email"
              name="email"
            />
        </div>
        {/* for password */}
        <div  className='mx-24'>
            <input
              className=" w-96 shadow appearance-none border my-4 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="password"
              type="text"
              placeholder="Password"
              name="Password"
            />
        </div>
        {/* confirm password */}
         <div  className='mx-24'>
            <input
              className=" w-96 shadow appearance-none border my-4 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none
               focus:shadow-outline   focus:border-orange-600 focus:ring-1 focus:ring-orange-600
               "
              id="confirm password"
              type="text"
              placeholder="confirm Password"
              name=" confirm Password"
            />
        </div>
        {/* for user ,artist,admin */}
            <div className ='text-gray-500 mx-24'>
            <label>User:</label>
            <input type ='radio' name='user' value='user' />
            <label>Artist:</label>
            <input type ='radio' name='artist' value='Artist' />
              <label>User:</label>
            <input type ='radio' name='user' value='user' />
            <label>Admin</label>
            <input type='radio' name='admin' value='admin' />
             </div>
             {/* for button */}
             <div>
              <button className='mt-4 mx-24 px-12 py-2 bg-yellow-200  rounded'>Register</button>
             </div>

          </div>
         
        </div>
    </div>
    </>
  )
}

export default Register