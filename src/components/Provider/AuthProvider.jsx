import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

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
     const authInfo = {
          user,
          createUser,
          updateUserProfile
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;