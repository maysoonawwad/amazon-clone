import React, { useState } from 'react'
import "./login.css"
import {Link , useHistory} from "react-router-dom";
import {signInWithEmailAndPassword , createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "./firebase"

//import { auth } from './firebase';
//import firebse from "./firebase"
function Login() {
    const history = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login= (e)=>{
    /* e.preventDefault();
    // auth.signInWithEmailAndPassword(email , password)
    auth.signInWithEmailAndPassword(email , password)
    .then((auth) =>{
        history.push('/');
        
    })
    .catch(e => alert(e.message));
    }*/
    signInWithEmailAndPassword(auth, email, password)
  .then((auth) =>{
    history.push('/');   
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    const register = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword( auth , email ,password)
        .then(auth => {
        history.push('/');
        } )
        .catch(e => alert(e.message));
       };

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="logo"
                />
            </Link>
            <div className="loin_container">
                 <h1>Sign in</h1>
                 <form>
                 <h5>E-mail</h5>
                 <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email"/>
                 <h5>Password</h5>
                 <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password"/>
                 <button onClick={login} type="submit" className="signin_button">Sign In</button>
                 <p>
                 By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                 </p>
                 <button onClick={register} className="create_button">Create your Amazon account</button>
                 </form>
            </div>
        </div>
    )
}

export default Login
