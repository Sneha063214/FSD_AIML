import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const [uname, setUname] = useState("")
  const [pass, setPass] = useState("")
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    // e.preventDefault();
    if(uname==="admin"&&pass==="manager"){
      navigate("/admin")
    }
    else if(uname==="user"&&pass==="abes"){
      navigate("/user")
    }
    else{
    alert("your credentials are not correct")}
  }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Uname</label>
            <input type="text" name="uname" placeholder='Enter username' val="" onChange={(e)=>{
              setUname(e.target.value)
            }} />
            <br/>
            <label>Password</label>
            <input type="password" name="pass" placeholder='Enter Password' val="" onChange={(e)=>{
              setPass(e.target.value)
            }} />

            <button type='submit'>SignUp</button>
            <button type='submit'>Reset</button>

        </form>
    </div>
  )
}

export default Login