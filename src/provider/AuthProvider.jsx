
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import auth from '../firebase/firebase.config'
import axios from 'axios'

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser)
      if(currentUser?.email) {
        setUser(currentUser)
      // if(currentUser?.displayName && currentUser?.photoURL){
      //   await axios.post(
      //     `${import.meta.env.VITE_API_URL}/users/${currentUser?.email}`,{
      //      name: currentUser?.displayName, 
      //      image: currentUser?.photoURL,
      //      email: currentUser?.email,
      //     }
      //   )
      // }
      //   const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
      //     {email: currentUser?.email}, 
      //     { withCredentials: true }
      //   )
      //   console.log(data)
      // }else {
      //   setUser(currentUser)
      //   const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/logout`,
      //     { withCredentials: true }
      //   )
        }else{
          setUser(currentUser)
        }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
