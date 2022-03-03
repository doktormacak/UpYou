import Logo from './Logo'
import arrow from '../../static/arrowRight.svg'
import lock from '../../static/lock.svg'
import name from '../../static/user.svg'
import PropTypes from 'prop-types'
import { useState } from 'react'

// const LOGIN_URL = '/login';

async function loginUser(credentials) {
 return fetch('https://api.upgradeyourself.tk/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     mode:'no-cors'
     
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({setToken}) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
    
  
  
  return (
    <div className="bg-black p-4 grid grid-rows-7 h-screen">
      <div className="bg-grin rounded-3xl p-4 h-full row-span-5 lg:bg-transparent">
        <div className="border-2 border-krim rounded-3xl h-full lg:border-0">
          <div className="grid gap-4 p-4 h-full">
            <div className="grid place-content-center">
              <Logo />
              <h3 className="text-krim text-center">PSY</h3>
            </div>
            <div className="grid align-center">
              <h1 className="text-krim text-6xl text-center">Find the Perfect Therapist</h1>
              <p className="text-xl text-krim text-center">Just few answers away from finding your perfect therapist</p>
            </div>
            <div className="grid place-items-center">
              <button form='form' type="submit" className="h-16 w-16 bg-krim rounded-2xl flex items-center justify-center">
                <img className="h-8 w-8" src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid items-center py-2">
        <div>
          <form id="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex justify-between px-2">
              <input
                id="name"
                className="text-krim placeholder-krim appearance-none border-none border-krim bg-transparent focus:outline-none"
                type="text"
                name="name"
                placeholder="Have an account?"
                autoComplete="off"
                required
                onChange={e => setUserName(e.target.value)}
              />
              <label htmlFor="name" className="">
                <img src={name} alt="user"/>
              </label>
            </div>
            <div className="border-b-2 border-krim w-full"></div>
            <div className="flex justify-between px-2">
              <input
                id="psw"
                className="text-krim placeholder-krim appearance-none border-none bg-transparent focus:outline-none"
                type="password"
                name="psw"
                placeholder="****"
                autoComplete="off"
                required
                onChange={e => setPassword(e.target.value)}
              />
              <label htmlFor="psw">
                <img src={lock} alt="password"/>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="grid justify-center">
          {/* <button className="text-krim text-2xl underline text-center"><Link to="register">Register</Link></button> */}
      </div>
    </div> 
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}