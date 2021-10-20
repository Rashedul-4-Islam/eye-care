import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const googleProvider = new GoogleAuthProvider(); 

    
    const handleEmailChange =(e) =>{
        setEmail(e.target.value);
    } 
    const handlePasswordChange =(e) =>{
        setPassword(e.target.value);
    }

    const handleRegistration = (e) =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length<6){
            setError('Password must be at least 6 Charcters long.')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must Contain 2 Uppercase')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
             const user = result.user;
             console.log(user);
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }

     // log in with email and password auth system

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
       .then((result) => {
            const user = result.user;
            setUser(result.user)
            console.log(user);
       })
       .catch(error =>{
            setError(error.message)
        })
    }

    const signInWithGoogle = () =>{
    //    return signInWithPopup(auth, googleProvider);
    return(
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
            console.log(result.user);
        })
        .catch(error =>{
            setError(error.message)
        })
    )
   
    }
    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              }
        });
    },[])

    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin
    }

}

export default useFirebase;