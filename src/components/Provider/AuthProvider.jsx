import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loader, setLoader] = useState(true)

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password) 
     }
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
          })
     }
     const signIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }
     const googleSignIn = () => {
          return signInWithPopup(auth, googleProvider)
     }
     const githubSignIn = () => {
          return signInWithPopup(auth, githubProvider)
     }

     useEffect(()=> {
          const unsubscribe = onAuthStateChanged(auth, loggedUser => {
               setUser(loggedUser)
          })

          return()=> {
               unsubscribe()
          }
     }, [])

     const authInfo = {
          user,
          createUser,
          signIn,
          googleSignIn,
          githubSignIn,
          updateUserProfile
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;