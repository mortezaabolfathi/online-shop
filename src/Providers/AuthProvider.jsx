import React, { createContext, useContext, useEffect, useState } from 'react';
import { date } from 'yup';

const AuthProviderContext=createContext();
const AuthProviderContextDispatcher=createContext();

const AuthProvider = ({children}) => {

    const [state,setState]=useState(false)

    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem("authState")) || false
        setState(userData)
    },[])

    useEffect(()=>{
        const data=JSON.stringify(state);
        localStorage.setItem("authState", data);
    },[state])
    
    
    return ( 
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatcher.Provider value={setState}>

                {children}

            </AuthProviderContextDispatcher.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth=()=>useContext(AuthProviderContext);
export const useAuthActions=()=>useContext(AuthProviderContextDispatcher);