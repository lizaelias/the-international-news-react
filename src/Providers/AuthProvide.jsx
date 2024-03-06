import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

 export const  AuthContext =createContext(null);
      
 const auth = getAuth(app);

const AuthProvide = ({children}) => {

    const [user, setUser] =useState(null);
    const [loding, setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        

    }

    const loginUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
        

    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
        
    }

    const signInWithGooglePopup =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }


     useEffect(()=>{
        
      const Unsubscribe =  onAuthStateChanged(auth ,currentUser=>{
            console.log('onAuthStateChanged user',currentUser);
            setUser(currentUser);
            setLoading(false)


        })
       return () => {
        Unsubscribe()
       }

     },[])

    const authIn = {
        user,
        createUser,
        loginUser,
        loding,
        signInWithGooglePopup,
        logOut,

     
    }
   



    return (
        <AuthContext.Provider value={authIn}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvide;