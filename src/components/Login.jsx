import React, {useState} from 'react'

function Login(props) {
    const changePage = () => {
        props.setLogInState(true)
    }
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center'>
      <h1>Login Page</h1>
      <form action="" className='flex flex-col w-[50vw]'>
        <input  placeholder="Username: "className="border-2 p-2 m-2 rounded border-black" type="text" name="username" id="username" />
        <input  placeholder="Password: "className="border-2 p-2 m-2 rounded border-black" type="password" name="password" id="password" />
        <button className="border-2 m-2 rounded border-black p-2" onClick={changePage} type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
