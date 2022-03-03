import { Link } from 'react-router-dom'
import Logo from '../LogIn/Logo'
import arrow from '../../static/arrowRight.svg'


export default function QandA() {
  return (
    <div className="bg-black p-4 h-screen grid grid-rows-7">
      <div className="bg-grin rounded-2xl p-4 row-span-6">
          <div className="border-krim border-2 rounded-2xl p-4 h-full grid grid-rows-5">
            <div className="flex flex-col justify-center items-center gap-4 row-span-1">
              <h1 className="text-krim text-4xl text-center">Tell us how you feel today</h1>
              <div className="border-b-2 border-krim w-4/5"></div>
            </div>
            <div className="flex flex-col justify-between text-krim row-span-3 p-4">
              <form>
                <div>
                  <input type="checkbox" id='emotions' name='emotions' />
                  <label htmlFor="emotions">
                    Depressed
                  </label>
                </div>
                <div>
                  <input type="checkbox" id='emotions' name='emotions' />
                  <label htmlFor="emotions">
                    Anxious
                  </label>
                </div>
                <div>
                  <input type="checkbox" id='emotions' name='emotions' />
                  <label htmlFor="emotions">
                    Stressed
                  </label>
                </div>
                <div>
                  <input type="checkbox" id='emotions' name='emotions' />
                  <label htmlFor="emotions">
                    Angry
                  </label>
                </div>
              </form>
            </div>
            <div className="grid place-items-center">
              <button className="h-16 w-16 bg-krim rounded-2xl flex items-center justify-center">
              <img className="h-8 w-8" src={arrow} alt="arrow" />
              </button>
            </div>
        </div>
      </div>
      <div className="grid place-content-center">
          <Link to="/"><Logo /></Link>
      </div>
    </div>
  )
}