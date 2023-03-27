import { useState } from "react"
function Newlogin() {
const[username,setUsername]= useState('');

const handlelogin = (e)=>{
    e.preventDefault();
    if(validate()){
        
    }
}
const validate=()=>{
let result=true;
if(username ===''||username ===null){
    result=false; 
    toast.warning('please enter the username')
}
return result;
}
  return (
    <>
     <form onSubmit={handlelogin}>
        <input type='text' 
        value={username}
        onChange={e=>setUsername(e.target.value)}
        />
        </form>
    </>
  )
}

export default Newlogin