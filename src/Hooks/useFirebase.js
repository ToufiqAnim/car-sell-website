import { useEffect, useState } from 'react';
import firebaseInitialize from '../Pages/Home/LogIn/Firebase/firebaseInitialize';

import { getAuth,GoogleAuthProvider,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, updateProfile,signOut  } from "firebase/auth";

firebaseInitialize()
const useFirebase = () => {
    const [user,setUser] =  useState({});
    const [isLoading, setIsLoading] = useState(true)
     const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

        // GOOGLE SIGN IN
        const signInWithGoogle = (location,history) =>{

            setIsLoading(true);
      
            signInWithPopup(auth, googleProvider)
      
            .then((result) => {       
              const user = result.user;
               saveUser(user.email, user.displayName, 'PUT')
              setAuthError(''); 
              const destination = location?.state?.from || '/';
                history.replace(destination); 
            }).catch((error) => {
            
              setAuthError(error.message);
      
            })
            .finally(() => setIsLoading(false));
          }

        //  EMAIL SIGN IN
        const registerUser = (email, password, name, history) =>{
            setIsLoading(true);
            createUserWithEmailAndPassword(auth,email,password)
             .then(result => {
          
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // set user to the database
            saveUser(email,name, 'POST')

            //send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            history.replace('/');

          })
          .catch((error) => {           
            setAuthError(error.message);
    
          })
          .finally(() => setIsLoading(false));
    }


    const loginUser =(email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');
            
        })
        .catch((error) => {

            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

        // onAuthState Changed

        useEffect(() =>{
            const unSubscribe =  onAuthStateChanged(auth, (user) => {
                 if (user) {
                   setUser(user)
                 } else {
                     setUser('')
                 }
                 setIsLoading(false)
               });
               return () => unSubscribe;
         },[])

          useEffect(()=>{
          fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
        },[user.email])
 
    // SIGN OUT
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
          
    }

    const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
  }
    return {
        user,
        signInWithGoogle,
        registerUser,
        loginUser,
        isLoading,
        logOut,
        authError,
        admin
    }
        
};

export default useFirebase;