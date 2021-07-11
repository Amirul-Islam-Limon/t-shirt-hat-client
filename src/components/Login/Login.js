import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

const Login = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            setLoggedInUser({displayName:user.displayName, email:user.email})
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
    return (
        <div className="login-area">
            <button className="login-button" onClick={handleSignIn} >
            <div className="login-container">
                <div className="login-icon">
                    <FontAwesomeIcon icon={faGoogle}/>
                </div>
                <div className="login-text">
                    <p>Sign In With Google</p>
                </div>
            </div>
        </button>
        </div>
    );
};

export default Login;