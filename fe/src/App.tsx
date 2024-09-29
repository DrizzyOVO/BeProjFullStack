import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Signin from "./components/Signin"; 
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
// import TodoList from "./components/todoList"; 
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { userState } from './store/atoms/user';
import Landing from './components/Landing';
import AdminPage from './components/Doc/Landing';
import DocSignin from './components/Doc/Signin';
import DocSignup from './components/Doc/Signup';
import { AuthContextProvider } from './AuthContext';
import { Toaster } from 'react-hot-toast';
import Bar from './Bar';
import { navUser } from './store/atoms/nav';
import { adminState } from './store/atoms/admin';
// const BASE_URL = process.env.BASE_URL; 


function App() {

    return (
        <RecoilRoot>
            <AuthContextProvider>
                <Toaster />
            <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: 'white'
            }}
            >   
                
                    <Router>
                        <Bar />
                        <InitUser />
                        <Routes>

                            <Route path={"/adminui/signup"} element={<DocSignup />} />
                            <Route path={"/adminui/signin"} element={<DocSignin />} /> 
                            <Route path={"/adminui"} element={<AdminPage />} /> 
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />

                            {/* <Route path={"/"} element={<Landing />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/adminui"} element={<AdminPage />} />  
                            <Route path={"/adminui/signin"} element={<DocSignin />} /> 
                            <Route path={"/adminui/signup"} element={<DocSignup />} /> */}
                            
                        </Routes>
                    </Router>

            </div>
            </AuthContextProvider>
        </RecoilRoot>
    );
}

function InitUser() { 

    const setUser = useSetRecoilState(userState); 
    const setAdmin = useSetRecoilState(adminState); 
    const setNav = useSetRecoilState(navUser); 
    const navigate = useNavigate(); 

    const init = async () => {

        setNav({ 
            isUser: true 
        })

        try { 
            const response = await axios.get('http://localhost:4000/user/me', {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }); 

            if(response.data.email){
                setUser({ 
                    isLoading: false, 
                    userEmail: response.data.email 
                })
                navigate('/')
                
            } else { 
                setUser({ 
                    isLoading: false, 
                    userEmail: null 
                }); 
                navigate('/')
            }
        } catch (e) { 

            setUser({ 
                isLoading: false, 
                userEmail: null 
            }); 

            try{

                const response = await axios.get('http://localhost:4000/admin/me', {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }); 
    
                if(response.data.email){
                    setAdmin({ 
                        isLoading: false, 
                        adminEmail: response.data.email 
                    })

                    setNav({ 
                        isUser: false,  
                    })

                    navigate('/adminui')
                    
                } else { 
                    setAdmin({ 
                        isLoading: false, 
                        adminEmail: null 
                    }); 
                    navigate('/')
                }

            } catch(e) { 

                setAdmin({
                    isLoading: false, 
                    adminEmail: null 
                }); 
                navigate('/')

            }

        }
        
    }; 

    useEffect(() => {
        init(); 
    }, []); 

    return <></>
    
}

export default App;