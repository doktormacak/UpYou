
import Logo from '../LogIn/Logo'
import arrow from '../../static/arrowRight.svg'
import name from '../../static/user.svg'
import surname from '../../static/surname.svg'
import email from '../../static/email.svg'
import lock from '../../static/lock.svg'


// const REGISTER_URL = '/register'
// const USER_REGEX = /^[a-zA-Z] [a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){8,24}$/;


export default function Register() {


  

  return (
    <div className="bg-black p-4 h-screen grid grid-rows-7">
      <div className="bg-grin rounded-2xl p-4 row-span-6">
          <div className="border-krim border-2 rounded-2xl p-4 h-full grid grid-rows-5">
            <div className="flex flex-col justify-center items-center gap-4 row-span-1">
              <h1 className="text-krim text-4xl">Register</h1>
              <div className="border-b-2 border-krim w-4/5"></div>
            </div>
              <form id="form" className="flex flex-col justify-between p-4 row-span-3">
              <div className="border-b-2 border-krim w-full flex justify-between px-2">
                <input
                id="name"
                className="text-krim placeholder-krim appearance-none border-none bg-transparent focus:outline-none"
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
                <label htmlFor="name">
                  <img src={name} alt="" />
                </label>
              </div>
              <div className="border-b-2 border-krim w-full flex justify-between px-2">
                <input
                id="surname"
                className="text-krim placeholder-krim appearance-none border-none bg-transparent focus:outline-none"
                type="text"
                name="surname"
                placeholder="Surname"
                autoComplete="off"
              />
                <label htmlFor="surname">
                  <img src={surname} alt="" />
                </label>
              </div>
              <div className="border-b-2 border-krim w-full flex justify-between px-2">
                <input
                id="email"
                className="text-krim placeholder-krim appearance-none border-none bg-transparent focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
                <label htmlFor="email">
                  <img src={email} alt="" />
                </label>
              </div>
              <div className="border-b-2 border-krim w-full flex justify-between px-2">
                <input
                id="psw"
                className="text-krim placeholder-krim appearance-none border-none bg-transparent focus:outline-none"
                type="password"
                name="psw"
                placeholder="Password"
                autoComplete="off"
              />
                <label htmlFor="psw">
                  <img src={lock} alt=""/>
                </label>
              </div>
            </form>
            <div className="grid place-items-center">
              <button form="form" type="submit" className="h-16 w-16 bg-krim rounded-2xl flex items-center justify-center">
              <img className="h-8 w-8" src={arrow} alt="arrow" />
              </button>
            </div>
        </div>
      </div>
      <div className="grid place-content-center">
          {/* <Link to="/"><Logo /></Link> */}
      </div>
    </div>
  )
}