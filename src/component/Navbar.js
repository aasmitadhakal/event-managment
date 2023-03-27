import { useState } from "react"
function Navbar() {
    const [open,setOpen] = useState()
  return (
    <div className='bg-blue-200 text-white'>
        <div className=''>==</div>
        <div onClick={()=>setOpen(!open)}
         className='grid md:grid-cols-4  grid-cols-1'>
            <div>Home</div>
            <div>About </div>
            <div>Contact</div>
             <div>Login</div>
             
        </div>

    </div>
  )
}

export default Navbar