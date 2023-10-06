import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in user
    const signInUser=(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logoutUser =()=>{
      return  signOut(auth);
     
    }


    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser)
        })

        return ()=>{
            unSubscribe()
            
        }

    }, [])




const authInfo ={
    user,
    createUser,
    signInUser,
    logoutUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}