import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email pass 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out user
    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('observing user of', user);
            setUser(currentUser)
            // setLoading(false);
            const userEmail = currentUser?.email;
            if(userEmail){
                axios.post('http://localhost:5000/jwt', {email: userEmail})
                .then(res => {
                    const token = res.data.token;
                    if(token){
                        setLoading(false);
                        localStorage.setItem('access-token', token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
    }, [user])

    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;