import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { userContext } from "../../App";
import firebaseConfig from './firebase.config';
const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const [user, setUser] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

                // ...
            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign up with GOOGLE</button>
            <br />
            <button onClick={handleFbSignIn}>sign up using facebook</button>
            <p>userName:{user.email}</p>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Login;