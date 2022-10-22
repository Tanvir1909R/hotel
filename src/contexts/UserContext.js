import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase'


export const authContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState({})
  const [loading, serLoading] = useState(true)
  const auth = getAuth(app);

  const googleRegister = (provider)=>{
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password)=>{
    return  createUserWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {user, setUser, createUser, googleRegister};
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  )
}

export default UserContext