import { useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightToBracket, faAsterisk, faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [pageState, setPageState] = useState(0);

  return (
    <>
      <section className='flex items-center justify-center w-screen h-screen tracking-wider bg-primary'>
        <div className="w-4/5 lg:w-3/4 bg-white h-3/5 md:h-1/2 lg:h-[500px] md:w-1/2 rounded-2xl shadow-lg flex flex-col overflow-hidden lg:flex-row relative">
          {/* icons */}
          <div className='relative z-10 flex w-full bg-white border-b-2 h-14 md:h-20 lg:w-28 lg:h-full lg:flex-col border-light'>
            <div className='flex items-center justify-center w-1/5 bg-white lg:w-full lg:h-1/5'><img src="../aruna-logo-box.png" className='w-12 md:w-20 lg:w-32' width={100} alt="" /></div>
            <div className='relative flex items-center justify-center w-2/5 overflow-hidden bg-white lg:w-full lg:h-2/5' onClick={()=>setPageState(0)}>
              <div className={`flex flex-col transition-all duration-300 ${pageState==0?'text-gray-600':'text-gray-400'}`}>
                <FontAwesomeIcon className='text-sm md:text-2xl' icon={faArrowRightToBracket} />
                <span className='text-xs font-semibold md:text-lg'>Login</span>
              </div>
              <span className={`w-full h-[4px] md:h-[6px] lg:w-[5px] lg:h-full bg-primary absolute bottom-0 transition-all duration-500 ${pageState==0?'left-0 lg:top-0':'left-full lg:top-full lg:left-0'}`}></span>
            </div>
            <div className='relative flex items-center justify-center w-2/5 overflow-hidden bg-white lg:w-full lg:h-2/5' onClick={()=>setPageState(1)}>
              <div className={`flex flex-col transition-all duration-300 ${pageState==1?'text-gray-600':'text-gray-400'}`}>
                <FontAwesomeIcon className='text-sm md:text-2xl' icon={faAddressCard} />
                <span className='text-xs font-semibold md:text-lg'>Register</span>
              </div>
              <span className={`w-full h-[4px] md:h-[6px] lg:w-[5px] lg:h-full bg-primary absolute bottom-0 transition-all duration-500 ${pageState==1?'right-0 lg:bottom-0 lg:left-0':'right-full lg:bottom-full lg:left-0'}`}></span>
            </div>
          </div>
          {/* icons */}

          <div className="relative z-20 flex flex-col w-full h-full overflow-hidden lg:flex-row">
            {/* images */}
            <div className="relative hidden w-full overflow-hidden bg-white h-1/2 lg:h-full lg:block">
              <div className={`h-full w-full grid content-center justify-items-center absolute transition-all duration-500 ${pageState==0?'right-0 lg:bottom-0':'right-full lg:bottom-full lg:right-0'}`}>
                <img src="../img/login.jpg" className='aspect-auto md:w-4/5 lg:w-full' alt="" />
              </div>
              <div className={`h-full w-full grid content-center justify-items-center absolute transition-all duration-500 ${pageState==1?'left-0 lg:top-0':'left-full lg:top-full lg:left-0'}`}>
                <img src="../img/register.jpg" className='aspect-auto md:w-4/5 lg:w-full' alt="" />
              </div>
            </div>
            {/* images */}

            {/* form */}
            <div className="flex items-center justify-center w-full h-full py-[50px] bg-white lg:bg-light text-dark relative overflow-hidden">
              
              {/* Login */}
              <div className={`absolute w-full h-[500px] flex justify-center transition-all duration-150 ${pageState==0?'left-0 lg:top-0':'left-full lg:top-full lg:left-0'}`}>
                <div className="flex flex-col items-center justify-center w-3/4">
                  <p className='mb-4'>don't have an account? <a href="#" onClick={()=>setPageState(!pageState)}>Sign Up</a></p>
                  <form action="" className='flex flex-col w-full gap-2 font-semibold'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="username">Username</label>
                      <span className='flex flex-row items-center gap-2 px-5 bg-white rounded-lg border-secondary-1 border-[1px] lg:border-none'>
                        <input type="text" className='w-full h-8 py-5 border-[1px] rounded-lg outline-none border-none text-dark font-normal' id='username' />
                        <FontAwesomeIcon icon={faUser} className='text-secondary-2'></FontAwesomeIcon>
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="password">Password</label>
                      <span className='flex flex-row items-center gap-2 px-5 bg-white rounded-lg border-secondary-1 border-[1px] lg:border-none'>
                        <input type="text" className='w-full h-8 py-5 border-[1px] rounded-lg outline-none border-none text-dark font-normal' id='password' />
                        <FontAwesomeIcon icon={faAsterisk} className='text-secondary-2'></FontAwesomeIcon>
                      </span>
                    </div>
                    <a href="#" className='py-2 mt-5 font-semibold text-center text-white rounded-lg bg-primary'>LOGIN</a>
                    <small className='mt-5 text-xs font-normal'>By clicking the Login Button, you therefore agree to the Privacy Policy. For more information, read about our privacy here.</small>
                  </form>
                </div>
              </div>
              {/* Login */}

              {/* Register */}
              <div className={`absolute w-full h-[500px] flex justify-center transition-all duration-150 ${pageState==1?'right-0 lg:bottom-0':'right-full lg:bottom-full lg:right-0'}`}>
                <div className="flex flex-col items-center justify-center w-3/4">
                  <p className='mb-4'>already have an account? <a href="#" onClick={()=>setPageState(!pageState)}>Sign In</a></p>
                  <form action="" className='flex flex-col w-full gap-2 font-semibold'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="username">Username</label>
                      <span className='flex flex-row items-center gap-2 px-5 bg-white rounded-lg border-secondary-1 border-[1px] lg:border-none'>
                        <input type="text" className='w-full h-8 py-5 border-[1px] rounded-lg outline-none border-none text-dark font-normal' id='username' />
                        <FontAwesomeIcon icon={faUser} className='text-secondary-2'></FontAwesomeIcon>
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="password">Password</label>
                      <span className='flex flex-row items-center gap-2 px-5 bg-white rounded-lg border-secondary-1 border-[1px] lg:border-none'>
                        <input type="text" className='w-full h-8 py-5 border-[1px] rounded-lg outline-none border-none text-dark font-normal' id='password' />
                        <FontAwesomeIcon icon={faAsterisk} className='text-secondary-2'></FontAwesomeIcon>
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="password">Password</label>
                      <span className='flex flex-row items-center gap-2 px-5 bg-white rounded-lg border-secondary-1 border-[1px] lg:border-none'>
                        <input type="text" className='w-full h-8 py-5 border-[1px] rounded-lg outline-none border-none text-dark font-normal' id='password' />
                        <FontAwesomeIcon icon={faAsterisk} className='text-secondary-2'></FontAwesomeIcon>
                      </span>
                    </div>
                    <a href="#" className='py-2 mt-5 font-semibold text-center text-white rounded-lg bg-primary'>REGISTER</a>
                  </form>
                </div>
              </div>
              {/* Register */}

            </div>
            {/* form */}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
