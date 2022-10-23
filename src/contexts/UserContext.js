import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase'


export const authContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)
  // const [loading, serLoading] = useState(true)
  const auth = getAuth(app);

  const googleRegister = (provider)=>{
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password)=>{
    return  createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
    })
    return ()=> {
      unsubscribe()
    }

  },[])

  const userInfo = {user, googleRegister, createUser, logIn, logOut};
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  )
}

export default UserContext