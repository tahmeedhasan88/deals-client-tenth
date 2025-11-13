import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { useState } from 'react';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const createUser = (email, password) =>{

    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)


}


const signInUser = (email, password) =>{

    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = () =>{

    setLoading(true)

    return signInWithPopup(auth, googleProvider)
}

const signOutGoogle = () =>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{

    setUser(currentUser);
    setLoading(false)


})

return ()=>{
    unSubscribe()
}

},[])


 const authInfo = {
    createUser,
    user,
    loading,
    setLoading,
    signInUser,
    signInWithGoogle,
    signOutGoogle,

 }

    return (
       <AuthContext value= {authInfo}>

        {children}

       </AuthContext>
    );
};

export default AuthProvider;