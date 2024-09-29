import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userEmailState } from '../store/selectors/userEmail';
import { navUser } from '../store/atoms/nav';

const Landing = () => { 

  const navigate = useNavigate(); 
  const userEmail = useRecoilValue(userEmailState); 

  const setNav = useSetRecoilState(navUser); 

  useEffect(() => {
    setNav({
      isUser: true
    })
  })

  return (
  <>

    <div className='grid grid-cols-1 sm:grid-cols-2 items-center bg-gray-100'> 

      <div>
        <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Get the best quality<span className='text-indigo-500'>&nbsp;Treatment</span>&nbsp;from
        </h1>
        <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className='text-indigo-500'>Top</span>&nbsp;Doctors!
        </h1>
      </div> 

      <div className='m-auto'>  
        <img src="/bTumor1.png" alt="smth" />
      </div>  

    </div>
    
    {userEmail ? <></> : <div className='grid grid-cols-1 sm:grid-cols-2 bg-gray-200 py-36'>

      <div className='m-auto'>
          <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" className="relative rounded-2xl" alt="food illustration" loading="lazy" width="500" height="600" />
      </div>

      <div className='m-auto mt-32 justify-center'>
                <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    Signup as a<span className='text-indigo-500'>&nbsp;Doctor!</span>
                </h1>
                <h3 style={{ fontWeight: 500, display: "flex", justifyContent: "center" }} className="sm:text-sm md:text-base lg:text-xl xl:text-2xl mt-7">
                  Doctors from around the world get solution to cure millions of Patients on NeuroAi. We provide the exact service to detect right.
                </h3>
                <h3 style={{ fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-7">
                  <button
                            className="font-semibold w-auto select-none rounded-2xl bg-gradient-to-tr from-indigo-700 to-indigo-500 py-2 px-4 text-center align-middle font-sans text-lg uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none "
                            onClick={() => {
                                navigate("/adminui") 
                            }}
                        >Start curing today</button>
                </h3>
      </div>

    </div>}

  </>

  )
}

export default Landing