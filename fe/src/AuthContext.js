'use client'
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { adminState } from "./store/atoms/admin";
import { whereIsNav } from "./store/selectors/whereIsNav";
import { navUser } from "./store/atoms/nav";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const setTheUser = useSetRecoilState(userState); 
  const setAdmin = useSetRecoilState(adminState); 
  const isUser = useRecoilValue(whereIsNav); 
  const setNav = useSetRecoilState(navUser); 

//   const googleSignIn = async () => { 
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);

//     const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/googleSignup`, {
//       email: email,
//       password: password
//     }, {
//         headers: {
//             "Content-type": "application/json"
//         }
//     }); 

//     if (res.data.message === 'Invalid input'){

//         toast.error('Invalid username or password');  

//     } else {

//       toast.success('Signed in!');

//       navigate.push("/"); 
        
//     }

//   };

    const emailPassSignInAdmin = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                console.log('user :- ' + user.email); 
                
                setAdmin({
                isLoading: false, 
                adminEmail: user.email,  
                })
            } else {
                setAdmin({ 
                isLoading: false, 
                adminEmail: null,  
                })
                console.log('noooo'); 
            }
            })
            .catch(error => (console.log(error)))
    }

    const emailPassSignIn = async (email, password, userId) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                console.log('user :- ' + user.email); 
                
                setTheUser({
                isLoading: false, 
                userEmail: user.email, 
                })
            } else {
                setTheUser({ 
                isLoading: false, 
                userEmail: null, 
                })
                console.log('noooo'); 
            }
            })
            .catch(error => (console.log(error)))
    }



    const emailPassSignUp = (email, password) => {  
        createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('currentUser :- ' + currentUser.email);
        if(currentUser.email === 'gaurav@gmail.com') { 
            setUser(currentUser)
            setAdmin({ 
            isLoading: false, 
            adminEmail: currentUser.email
            }); 
            setNav({
            isUser: false
            })
        } else { 
            setUser(currentUser);
            setTheUser({ 
            isLoading: false, 
            userEmail: currentUser.email
            }); 
            setNav({
            isUser: true
            })
        }
        
        });
        return () => unsubscribe();
    }, [user, onAuthStateChanged, setAdmin, setTheUser, setNav]);

    return (
        <AuthContext.Provider value={{ user, emailPassSignIn, emailPassSignUp, emailPassSignInAdmin, logOut }}>
        {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};