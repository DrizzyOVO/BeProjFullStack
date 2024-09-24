// import Button from '@mui/material/Button';
// import TextField from "@mui/material/TextField";
// import {Card, Typography} from "@mui/material";
// import {useState} from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import { useSetRecoilState } from 'recoil';
// import { userState } from '../store/atoms/user';

// function Signup() {
//     const navigate = useNavigate(); 
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const setUser = useSetRecoilState(userState); 
            
//     return <div className='flex justify-center mt-20'>

//     <div className="relative flex flex-col text-gray-700 bg-gray-800 shadow-md w-96 rounded-xl bg-clip-border">
//     <div
//     className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
//     <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white" style={{fontFamily: 'Cookie', fontSize: "55px", color: 'white'}}>
//         Sign up
//     </h3>
//     </div>
//     <div className="flex flex-col gap-4 p-6">
//     <div className="relative h-11 w-full min-w-[200px]">
//         <input
//             onChange={(evant11) => {
//                 let elemt = evant11.target;
//                 setEmail(elemt.value);
//             }}
//         className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-gray-300 border-gray-900 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//         placeholder=" " />
//         <label
//         className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//         Email
//         </label>
//     </div>
//     <div className="relative h-11 w-full min-w-[200px]">
//         <input
//             onChange={(e) => {
//             setPassword(e.target.value);
//             }}
//             className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-gray-300 border-gray-900 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//             placeholder=" " />
//         <label
//         className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//         Password
//         </label>
//     </div>
//     <div className="-ml-2.5">

//     </div>
//     </div>
//     <div className="p-6 pt-0">
//     <button
//         style={{fontFamily: 'Cookie', fontSize: "20px", color: 'white'}}
//         className="block w-full select-none rounded-lg bg-gradient-to-tr from-green-600 to-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
//         onClick={async () => {
//             const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, {
//                 username: email,
//                 password: password
//             }, {
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             }); 

//             if (res.data.message === 'Invalid input'){

//                 window.alert('Invalid username or password'); 

//             } else {
                        
//                 localStorage.setItem("token", res.data.token);
//                 setUser({ 
//                     isLoading: false, 
//                     userEmail: email
//                 })
//                 navigate("/"); 
                
//             }
//         }}
//         type="button">
//         Sign up
//     </button>
//     <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-gray-400">
//         Already have an account?
//         <a
//         className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-gray-300 cursor-pointer"
//         onClick={() => {
//             navigate("/signin")
//         }}
//         >
//         login 
//         </a>
//     </p>
//     </div>
//     </div>
//     </div>


// }

// export default Signup;



"use client" 
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';
import { UserAuth } from '../AuthContext';
import toast from 'react-hot-toast';
import { z } from 'zod';

const signUpInput = z.object({ 
    email: z.string().max(50).min(5).email(), 
    password: z.string().min(6)
}); 

function Signup() {
    const navigate = useNavigate();  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const setUser = useSetRecoilState(userState); 
    const { emailPassSignUp, emailPassSignIn, googleSignIn } = UserAuth();

    const handleSignUp = async (email: string, password: string) => { 
        // createUserWithEmailAndPassword(auth, email, password);
        try { 
            await emailPassSignUp(email, password); 
            navigate("/");
        } catch(error) { 
            console.log(error); 
        }
    };

    const handleSignInOnSignUp = async (email: string, password: string) => { 
        try {   
            await emailPassSignIn(email, password);  
        } catch (error) { 
            console.log(error); 
        }
    }

return (
    <div>   

        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Welcome to Coursera
                        </h1>
                        <h1 className="text-2xl xl:text-3xl font-extrabold mt-3">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">

                            <div className="mx-auto max-w-xs">
                                <input
                                    onChange={(evant11) => {
                                        let elemt = evant11.target;
                                        setEmail(elemt.value);
                                    }}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" />
                                <button

                                    onClick={async() => { 

                                        const parsedInput = signUpInput.safeParse({email, password}); 
                                    
                                        if(!parsedInput.success) {
                                            toast.error('invalid email / password \n password length more the 6 characters!', {duration: 4000})
                                        } else {

                                            toast.loading("Please hold on, while we connect to our backend", {duration: 7000});

                                            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`, {
                                                email: email,
                                                password: password
                                            })
                                            
                                            if (response) { 
                    
                                                if (response.data.message == 'User already exists'){  
                                                    let data = response.data;
                                                    await handleSignInOnSignUp(email, password);  
                                                    setUser({ 
                                                        isLoading: false, 
                                                        userEmail: data.email
                                                    }); 
                                                    navigate("/");
                                                } else if (response.data.message == 'Created user sucessfully') {

                                                    await handleSignUp(email, password); 
                                                    await handleSignInOnSignUp(email, password); 
                                                    navigate("/");

                                                } else if (response.data.message == "Incorrect password"){
                                                    toast.error('Incorrect Password')
                                                    setUser({ 
                                                        isLoading: false, 
                                                        userEmail: null
                                                    }); 
                                                } else {
                                                    toast.error("Try again.")
                                                    setUser({ 
                                                        isLoading: false, 
                                                        userEmail: null
                                                    }); 
                                                    navigate("/signup");
                                                } 
                    
                                            } else { 
                                                toast.error('Try again!')
                                                navigate("/signup");
                                            }
                                        }}
                                    }

                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>

                                <p className="mt-6 mb-0 leading-normal text-sm text-center">Already have an account? <a href={'/signin'} className="font-bold text-indigo-700">Sign in</a></p> 

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by Coursera&apos;s
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                    &nbsp;Terms of Service
                                    </a>
                                    &nbsp;and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                    &nbsp;Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage: "url(/stdLogin.png)"}}>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )

}

export default Signup;
// https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=740






