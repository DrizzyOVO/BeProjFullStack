import { useNavigate } from 'react-router-dom'
import { navUser } from '../../store/atoms/nav'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const AdminPage = () => { 

    const setNav = useSetRecoilState(navUser); 
    const navigate = useNavigate(); 

    useEffect(() => {
        setNav({ 
            isUser: false 
        })
    }); 

    return (
        <div className="mt-32" style={{justifyContent: "center" }}>
            <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
                Welcome to <span className='text-indigo-500'>&nbsp;NeuroAi Admin!</span>
            </h1>
            <h3 style={{ fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-7">
                Go to the <span className='text-indigo-500'>&nbsp;Signup&nbsp;</span> page and cure em!!!
            </h3>

            <div className='m-auto mt-32 justify-center'>
                {/* <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    Become an <span className='text-indigo-500'>&nbsp;Instructor!</span>
                </h1> */}
                <h3 style={{ fontWeight: 500, display: "flex", justifyContent: "center" }} className="sm:text-sm md:text-base lg:text-xl xl:text-2xl mt-7">
                  return back to patient.ui
                </h3>
                <h3 style={{ fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-7">
                  <button
                            className="font-semibold w-auto select-none rounded-2xl bg-gradient-to-tr from-indigo-700 to-indigo-500 py-2 px-4 text-center align-middle font-sans text-lg uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none "
                            onClick={() => {
                                navigate("/") 
                            }}
                        >NeuroAi for Patients</button>
                </h3>
      </div>


        </div>
    )
}

export default AdminPage 