import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// const BASE_URL = process.env.BASE_URL; 


function App() {

    return (
        <RecoilRoot>
            <AuthContextProvider>
                <Toaster />
            <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: 'rgba(17 24 39 / 1.0)'
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
    const init = async () => {
        // console.log("base url :- " + process.env.REACT_APP_BASE_URL);
        try { 
            const response = await axios.get('/auth/me', {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }); 

            if(response.data.username){
                setUser({ 
                    isLoading: false, 
                    userEmail: response.data.username 
                })
            } else { 
                setUser({ 
                    isLoading: false, 
                    userEmail: null 
                })
            }
        } catch (e) { 
            setUser({ 
                isLoading: false, 
                userEmail: null 
            })
        }
    }; 

    useEffect(() => {
        init(); 
    }, []); 

    return <></>
    
}

export default App;