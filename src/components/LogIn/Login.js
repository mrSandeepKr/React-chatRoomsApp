import React from 'react'
import Button from '@mui/material/Button'
import './login.css'
import { auth, provider } from '../../Firebase'
import { signInWithPopup } from "firebase/auth";

const Login = ({setUser}) => {
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                const user = result.user;

                console.log(user)
                setUser(user)
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // const email = error.customData.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);

                alert(errorMessage)
            })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' alt='xyz' />
                <div className="login__text">
                    Let's login to WhatsApp
                </div>
                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login