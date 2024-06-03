import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Config/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // Create user
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update user
      const userUpdate = (name, photoUrl) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      // password reset
      const forgotPassword = (email) => {
            return sendPasswordResetEmail(auth, email)
      }

      // sign in
      const logIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      // log in with google
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }

      // log in with github
      const githubLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, gitHubProvider)
      }

      // log in with facebook
      const facebookLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, facebookProvider)
      }

      // log out
      const logOut = () => {
            setLoading(true)
            setUser(null)
            return signOut(auth)
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('Logged in user', currentUser);
                  setUser(currentUser)
                  setLoading(false)
            })

            return () => {
                  unSubscribe()
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            userUpdate,
            forgotPassword,
            logIn,
            googleLogin,
            githubLogin,
            facebookLogin,
            logOut,
            loading,
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
};

export default AuthProvider;