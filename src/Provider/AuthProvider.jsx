import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    // create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }



const user = 'swadeb'

const authInfo ={
    user,
    createUser,
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